import { AppBadge } from "@/components/Badge";
import { questions } from "@/data/quiz";

interface TaskListScreenProps {
  completedIds: Set<number>;
  onSelectTask: (id: number) => void;
  onBack: () => void;
}

export function TaskListScreen({
  completedIds,
  onSelectTask,
  onBack,
}: TaskListScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background px-5 pt-6 pb-8">
      <div className="flex items-center gap-3 mb-2">
        <AppBadge>ЗАДАНИЯ</AppBadge>
        <AppBadge variant="light">Для 5–6 классов</AppBadge>
      </div>

      <p className="text-muted-foreground text-sm font-body mt-2 mb-6">
        Выбери задание из списка ниже
      </p>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-2 rounded-full bg-primary/15 overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{
              width: `${(completedIds.size / questions.length) * 100}%`,
            }}
          />
        </div>
        <span className="text-xs text-muted-foreground font-body">
          {completedIds.size}/{questions.length}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3 flex-1" data-ocid="task_list.list">
        {questions.map((q) => {
          const done = completedIds.has(q.id);
          return (
            <button
              type="button"
              key={q.id}
              data-ocid={`task_list.item.${q.id}`}
              onClick={() => onSelectTask(q.id)}
              className={`aspect-square rounded-2xl font-display font-bold text-lg flex items-center justify-center transition-all active:scale-90 shadow-xs ${
                done
                  ? "bg-success text-success-foreground"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {done ? "✓" : q.id}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        data-ocid="task_list.back.button"
        onClick={onBack}
        className="mt-8 text-primary font-body text-sm underline underline-offset-2"
      >
        ← Вернуться назад
      </button>
    </div>
  );
}
