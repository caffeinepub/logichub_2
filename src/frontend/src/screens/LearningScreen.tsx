import { AppBadge } from "@/components/Badge";
import { learningTopics } from "@/data/quiz";

interface LearningScreenProps {
  onSelectTopic: (id: number) => void;
  onBack: () => void;
}

const TOPIC_ICONS = ["🔢", "✂️", "➕", "➖", "✖️", "➗", "🔎", "🔬", "🔟", "📐"];

export function LearningScreen({ onSelectTopic, onBack }: LearningScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background px-5 pt-6 pb-8">
      <div className="flex items-center gap-3 mb-2">
        <AppBadge>ОБУЧЕНИЕ</AppBadge>
        <AppBadge variant="light">Для 5–6 классов</AppBadge>
      </div>
      <p className="text-muted-foreground text-sm font-body mt-2 mb-6">
        Выбери тему для изучения
      </p>

      <div className="flex flex-col gap-3 flex-1" data-ocid="learning.list">
        {learningTopics.map((topic, i) => (
          <button
            type="button"
            key={topic.id}
            data-ocid={`learning.item.${topic.id}`}
            onClick={() => onSelectTopic(topic.id)}
            className="w-full bg-card rounded-2xl px-4 py-4 flex items-center gap-4 shadow-xs text-left active:scale-98 transition-transform border border-border"
          >
            <span className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-xl flex-shrink-0">
              {TOPIC_ICONS[i]}
            </span>
            <span className="font-body font-medium text-foreground">
              {topic.title}
            </span>
            <span className="ml-auto text-muted-foreground">›</span>
          </button>
        ))}
      </div>

      <button
        type="button"
        data-ocid="learning.back.button"
        onClick={onBack}
        className="mt-8 text-primary font-body text-sm underline underline-offset-2"
      >
        ← Вернуться назад
      </button>
    </div>
  );
}
