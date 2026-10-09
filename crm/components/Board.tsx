"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { moveStageAction } from "@/app/(app)/clients/actions";
import { GENDERS, STAGES, missingChecks, type Checks, type Stage } from "@/lib/stages";

export type BoardCard = {
  id: string;
  stage: Stage;
  ready: boolean;
  checks: Checks;
  name: string;
  age: string;
  gender: string;
  occupation: string;
};

const genderLabel = (g: string) => GENDERS.find((x) => x.value === g)?.label ?? "";

function CardBody({ c }: { c: BoardCard }) {
  const missing = missingChecks(c.checks);
  const meta = [c.age && `${c.age}歲`, genderLabel(c.gender), c.occupation].filter(Boolean).join(" · ");
  return (
    <>
      <div className="row">
        <span className="name">{c.name || "（未命名）"}</span>
        <span className="spacer" />
        {c.ready ? (
          <span className="badge badge-green">✓ 具備簽單條件</span>
        ) : (
          <span className="badge badge-yellow">仲差 {missing.length} 格</span>
        )}
      </div>
      {meta && <div className="meta">{meta}</div>}
      {!c.ready && missing.length <= 3 && (
        <div className="missing">差：{missing.map((m) => `${m.stage}・${m.label}`).join("、")}</div>
      )}
    </>
  );
}

function DraggableCard({ c, readOnly }: { c: BoardCard; readOnly: boolean }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: c.id, disabled: readOnly });
  return (
    <Link
      href={`/clients/${c.id}`}
      ref={setNodeRef}
      className={`client-card${c.ready ? " ready" : ""}${isDragging ? " dragging" : ""}`}
      data-testid="client-card"
      {...(readOnly ? {} : listeners)}
      {...(readOnly ? {} : attributes)}
    >
      <CardBody c={c} />
    </Link>
  );
}

function Column({ stage, label, cards, readOnly }: { stage: Stage; label: string; cards: BoardCard[]; readOnly: boolean }) {
  const { setNodeRef, isOver } = useDroppable({ id: stage, disabled: readOnly });
  const done = stage === "SIGNED" || stage === "ISSUED";
  return (
    <section ref={setNodeRef} className={`column${isOver ? " over" : ""}${done ? " column-done" : ""}`} data-stage={stage}>
      <div className="column-head">
        <span>{label}</span>
        <span className="badge badge-grey">{cards.length}</span>
      </div>
      {cards.map((c) => (
        <DraggableCard key={c.id} c={c} readOnly={readOnly} />
      ))}
      {cards.length === 0 && <p className="muted small" style={{ padding: "0 6px" }}>（冇）</p>}
    </section>
  );
}

export default function Board({ cards: initial, readOnly = false }: { cards: BoardCard[]; readOnly?: boolean }) {
  const router = useRouter();
  const [cards, setCards] = useState(initial);
  useEffect(() => setCards(initial), [initial]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  // 滑鼠拖 6px 先算拖；手機長按 250ms 先開始拖，避免同捲動打交
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 8 } }),
    useSensor(KeyboardSensor),
  );

  const onDragStart = (e: DragStartEvent) => setActiveId(String(e.active.id));

  const onDragEnd = (e: DragEndEvent) => {
    setActiveId(null);
    const id = String(e.active.id);
    const to = e.over?.id as Stage | undefined;
    const card = cards.find((c) => c.id === id);
    if (!card || !to || card.stage === to) return;
    if ((to === "SIGNED" || to === "ISSUED") && !card.ready) {
      const n = missingChecks(card.checks).length;
      if (!window.confirm(`「${card.name}」仲差 ${n} 格先具備簽單條件，確定移去「${STAGES.find((s) => s.key === to)?.short}」？`)) return;
    }
    const prev = cards;
    setCards((cs) => cs.map((c) => (c.id === id ? { ...c, stage: to } : c)));
    setError(null);
    startTransition(async () => {
      const res = await moveStageAction(id, to);
      if (!res.ok) {
        setCards(prev);
        setError(res.error);
      } else {
        router.refresh();
      }
    });
  };

  const active = cards.find((c) => c.id === activeId);

  return (
    <>
      {error && <p className="error">{error}</p>}
      <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragCancel={() => setActiveId(null)}>
        <div className="board">
          {STAGES.map((s) => (
            <Column key={s.key} stage={s.key} label={s.short} cards={cards.filter((c) => c.stage === s.key)} readOnly={readOnly} />
          ))}
        </div>
        <DragOverlay>
          {active ? (
            <div className={`client-card drag-overlay${active.ready ? " ready" : ""}`}>
              <CardBody c={active} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
  );
}
