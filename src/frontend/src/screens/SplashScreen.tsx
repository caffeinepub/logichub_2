export function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background relative">
      <div className="flex flex-col items-center gap-6 animate-splash-in">
        {/* Logo */}
        <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center shadow-card">
          <span className="text-4xl font-display font-bold text-primary-foreground">
            L
          </span>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">
            LogicHub
          </h1>
          <p className="text-muted-foreground mt-1 font-body">
            Логические задачи для школьников
          </p>
        </div>

        {/* Loading dots */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <p className="text-sm text-muted-foreground font-body">загрузка...</p>
          <div className="dot-pulse text-primary flex">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      {/* Tip bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/10 border-t border-primary/20 px-6 py-4">
        <p className="text-xs text-center text-primary font-body">
          💡 Совет: пока идёт загрузка, настройся на мозговую активность
        </p>
      </div>
    </div>
  );
}
