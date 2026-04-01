import { AppBadge } from "@/components/Badge";
import type { Question } from "@/data/quiz";

interface ExplanationScreenProps {
  question: Question;
  onBack: () => void;
  onNext: (() => void) | null;
}

const LABELS = ["А", "Б", "В"];

export function ExplanationScreen({
  question,
  onBack,
  onNext,
}: ExplanationScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background px-5 pt-6 pb-8 animate-slide-up">
      <div className="flex items-center gap-3 mb-6">
        <AppBadge>Объяснение</AppBadge>
        <span className="text-xs text-muted-foreground font-body">
          Задание {question.id}
        </span>
      </div>

      <div className="bg-primary/10 rounded-2xl p-4 mb-4">
        <p className="text-sm font-body text-primary font-medium">
          {question.text}
        </p>
      </div>

      <div className="bg-success/15 border border-success/30 rounded-2xl px-5 py-4 mb-4 flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-success flex items-center justify-center text-success-foreground font-display font-bold text-sm">
          {LABELS[question.answer]}
        </span>
        <div>
          <p className="text-xs text-muted-foreground font-body">
            Правильный ответ
          </p>
          <p className="text-base font-display font-bold text-foreground">
            {question.options[question.answer]}
          </p>
        </div>
        <span className="ml-auto text-success text-xl">✓</span>
      </div>

      <div className="bg-card rounded-2xl p-5 shadow-xs flex-1">
        <h3 className="font-display font-bold text-sm text-muted-foreground mb-2 uppercase tracking-wider">
          Объяснение
        </h3>
        <p className="font-body text-foreground text-base leading-relaxed">
          {question.explanation}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {onNext && (
          <button
            type="button"
            data-ocid="explanation.next.button"
            onClick={onNext}
            className="w-full bg-primary text-primary-foreground font-display font-bold py-3.5 rounded-2xl active:scale-95 transition-transform"
          >
            Следующее задание →
          </button>
        )}
        <button
          type="button"
          data-ocid="explanation.back.button"
          onClick={onBack}
          className="text-primary font-body text-sm underline underline-offset-2"
        >
          ← Вернуться к заданиям
        </button>
      </div>
    </div>
  );
}
