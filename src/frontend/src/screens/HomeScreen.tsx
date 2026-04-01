interface HomeScreenProps {
  onTasks: () => void;
  onLearning: () => void;
}

export function HomeScreen({ onTasks, onLearning }: HomeScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <div className="relative bg-primary pt-14 pb-16 px-6 overflow-hidden">
        <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10" />
        <div className="absolute top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-white/10" />
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-4">
            <span className="text-3xl font-display font-bold text-white">
              L
            </span>
          </div>
          <h1 className="text-4xl font-display font-bold text-white tracking-tight">
            LogicHub
          </h1>
          <p className="text-white/80 mt-2 font-body text-sm">
            Логические задачи для школьников
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1">
            <span className="text-white text-xs font-body">
              📚 6 класс · Дроби, НОД, НОК
            </span>
          </div>
        </div>
        <div
          className="absolute -bottom-6 left-0 right-0 h-12 bg-background"
          style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-4 pb-20 mt-6 animate-slide-up">
        <button
          type="button"
          data-ocid="home.tasks.button"
          onClick={onTasks}
          className="w-full max-w-xs bg-primary text-primary-foreground font-display font-bold text-lg py-4 rounded-2xl shadow-card active:scale-95 transition-transform"
        >
          📝 ЗАДАНИЯ
        </button>
        <button
          type="button"
          data-ocid="home.learning.button"
          onClick={onLearning}
          className="w-full max-w-xs bg-primary/15 text-primary font-display font-bold text-lg py-4 rounded-2xl active:scale-95 transition-transform"
        >
          📘 ОБУЧЕНИЕ
        </button>
      </div>

      <footer className="pb-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
