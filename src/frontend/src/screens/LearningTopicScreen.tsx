import { AppBadge } from "@/components/Badge";
import type { LearningTopic } from "@/data/quiz";

interface LearningTopicScreenProps {
  topic: LearningTopic;
  onBack: () => void;
  onNext: (() => void) | null;
}

export function LearningTopicScreen({
  topic,
  onBack,
  onNext,
}: LearningTopicScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background px-5 pt-6 pb-8 animate-slide-up">
      <div className="flex items-center gap-3 mb-6">
        <AppBadge>Тема {topic.id}</AppBadge>
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">
        {topic.title}
      </h2>

      <div className="bg-card rounded-2xl p-5 shadow-xs flex-1">
        {topic.content.split("\n").map((line, i) => (
          <p
            key={`line-${topic.id}-${i}`}
            className="font-body text-foreground text-base leading-relaxed mb-2"
          >
            {line}
          </p>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {onNext && (
          <button
            type="button"
            data-ocid="learning_topic.next.button"
            onClick={onNext}
            className="w-full bg-primary text-primary-foreground font-display font-bold py-3.5 rounded-2xl active:scale-95 transition-transform"
          >
            Следующая тема →
          </button>
        )}
        <button
          type="button"
          data-ocid="learning_topic.back.button"
          onClick={onBack}
          className="text-primary font-body text-sm underline underline-offset-2"
        >
          ← Вернуться к темам
        </button>
      </div>
    </div>
  );
}
