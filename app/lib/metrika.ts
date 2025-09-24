export function trackMetrikaGoal(goalName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") {
    return;
  }

  const counterId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
  if (!counterId) {
    return;
  }

  const ym = (window as typeof window & { ym?: (...args: unknown[]) => void }).ym;
  if (typeof ym !== "function") {
    return;
  }

  try {
    ym(Number(counterId), "reachGoal", goalName, params);
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn("Failed to send Yandex Metrika goal", error);
    }
  }
}
