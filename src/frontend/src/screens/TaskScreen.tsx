import { AppBadge } from "@/components/Badge";
import type { Question } from "@/data/quiz";
import { useState } from "react";

interface TaskScreenProps {
  question: Question;
  onExplanation: () => void;
  onBack: () => void;
  onCorrect: (id: number) => void;
}

const LABELS = ["А", "Б", "В"];

export function TaskScreen({
  question,
  onExplanation,
  onBack,
  onCorrect,
}: TaskScreenProps) {
  const [selected, setSelected] = useState<number | null>(null);

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === question.answer) {
      onCorrect(question.id);
    }
  }

  const isAnswered = selected !== null;

  return (
    <div className="flex flex-col min-h-screen bg-background px-5 pt-6 pb-8 animate-slide-up">
      <div className="flex items-center gap-3 mb-6">
        <AppBadge>Задание {question.id}</AppBadge>
        <span className="text-xs text-muted-foreground font-body">
          {question.id} / 16
        </span>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-card mb-6">
        <p className="text-xl font-display font-bold text-foreground leading-snug">
          {question.text}
        </p>
      </div>

      <div className="flex flex-col gap-3" data-ocid="task.options.list">
        {question.options.map((option, idx) => {
          let style = "bg-card border border-border text-foreground";
          if (isAnswered) {
            if (idx === question.answer) {
              style = "bg-success text-success-foreground border-transparent";
            } else if (idx === selected) {
              style =
                "bg-destructive text-destructive-foreground border-transparent";
            } else {
              style =
                "bg-card border border-border text-muted-foreground opacity-50";
            }
          }
          return (
            <button
              type="button"
              key={`opt-${question.id}-${idx}`}
              data-ocid={`task.option.${idx + 1}`}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={`w-full rounded-2xl px-5 py-4 text-left font-body font-medium text-base transition-all active:scale-95 flex items-center gap-3 shadow-xs ${style}`}
            >
              <span className="w-8 h-8 rounded-full bg-current/10 flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                {LABELS[idx]}
              </span>
              <span className="text-base">{option}</span>
              {isAnswered && idx === question.answer && (
                <span className="ml-auto text-lg">✓</span>
              )}
              {isAnswered && idx === selected && idx !== question.answer && (
                <span className="ml-auto text-lg">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div
          className="mt-5 animate-slide-up"
          data-ocid="task.result.success_state"
        >
          <div
            className={`rounded-2xl px-5 py-3 text-sm font-body font-medium ${
              selected === question.answer
                ? "bg-success/20 text-success"
                : "bg-destructive/15 text-destructive"
            }`}
          >
            {selected === question.answer
              ? "🎉 Правильно! Отличная работа!"
              : "❌ Неверно. Посмотри объяснение."}
          </div>
          <button
            type="button"
            data-ocid="task.explanation.button"
            onClick={onExplanation}
            className="mt-3 w-full bg-primary text-primary-foreground font-display font-bold py-3 rounded-2xl active:scale-95 transition-transform"
          >
            📖 Объяснение
          </button>
        </div>
      )}

      <button
        type="button"
        data-ocid="task.back.button"
        onClick={onBack}
        className="mt-auto pt-8 text-primary font-body text-sm underline underline-offset-2"
      >
        ← Вернуться назад
      </button>
    </div>
  );
}
