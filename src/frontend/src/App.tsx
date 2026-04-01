import { MathBackground } from "@/components/MathBackground";
import { learningTopics, questions } from "@/data/quiz";
import { ExplanationScreen } from "@/screens/ExplanationScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { LearningScreen } from "@/screens/LearningScreen";
import { LearningTopicScreen } from "@/screens/LearningTopicScreen";
import { SplashScreen } from "@/screens/SplashScreen";
import { TaskListScreen } from "@/screens/TaskListScreen";
import { TaskScreen } from "@/screens/TaskScreen";
import { useEffect, useState } from "react";

type Screen =
  | "splash"
  | "home"
  | "taskList"
  | "task"
  | "explanation"
  | "learning"
  | "learningTopic";

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [currentTaskId, setCurrentTaskId] = useState<number>(1);
  const [currentTopicId, setCurrentTopicId] = useState<number>(1);
  const [completedIds, setCompletedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    const timer = setTimeout(() => setScreen("home"), 1800);
    return () => clearTimeout(timer);
  }, []);

  const currentQuestion =
    questions.find((q) => q.id === currentTaskId) ?? questions[0];
  const currentTopic =
    learningTopics.find((t) => t.id === currentTopicId) ?? learningTopics[0];

  const nextTaskId =
    currentTaskId < questions.length ? currentTaskId + 1 : null;
  const nextTopicId =
    currentTopicId < learningTopics.length ? currentTopicId + 1 : null;

  function handleCorrect(id: number) {
    setCompletedIds((prev) => new Set([...prev, id]));
  }

  return (
    <div className="relative min-h-screen max-w-[430px] mx-auto overflow-hidden">
      <MathBackground />
      <div className="relative z-10">
        {screen === "splash" && <SplashScreen />}

        {screen === "home" && (
          <HomeScreen
            onTasks={() => setScreen("taskList")}
            onLearning={() => setScreen("learning")}
          />
        )}

        {screen === "taskList" && (
          <TaskListScreen
            completedIds={completedIds}
            onSelectTask={(id) => {
              setCurrentTaskId(id);
              setScreen("task");
            }}
            onBack={() => setScreen("home")}
          />
        )}

        {screen === "task" && (
          <TaskScreen
            key={currentTaskId}
            question={currentQuestion}
            onExplanation={() => setScreen("explanation")}
            onBack={() => setScreen("taskList")}
            onCorrect={handleCorrect}
          />
        )}

        {screen === "explanation" && (
          <ExplanationScreen
            question={currentQuestion}
            onBack={() => setScreen("taskList")}
            onNext={
              nextTaskId
                ? () => {
                    setCurrentTaskId(nextTaskId);
                    setScreen("task");
                  }
                : null
            }
          />
        )}

        {screen === "learning" && (
          <LearningScreen
            onSelectTopic={(id) => {
              setCurrentTopicId(id);
              setScreen("learningTopic");
            }}
            onBack={() => setScreen("home")}
          />
        )}

        {screen === "learningTopic" && (
          <LearningTopicScreen
            key={currentTopicId}
            topic={currentTopic}
            onBack={() => setScreen("learning")}
            onNext={
              nextTopicId
                ? () => {
                    setCurrentTopicId(nextTopicId);
                  }
                : null
            }
          />
        )}
      </div>
    </div>
  );
}
