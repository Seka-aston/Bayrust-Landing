// Plays a figure's scripted loop: each step adds a class to the root at its time, CSS does the motion.
// The loop runs only while the figure is on screen; with reduced motion it shows the `still` frame instead.

export interface Step {
  at: number;
  add: string;
  run?: (root: HTMLElement) => void;
}

export interface Loop {
  duration: number;
  steps: Step[];
  /** Classes that make up the single frame shown when motion is reduced. */
  still: string[];
  /** Puts any script-driven content (counters, typed text) into its still state. */
  settle?: (root: HTMLElement) => void;
}

export function playLoop(root: HTMLElement, loop: Loop) {
  const added = [...new Set(loop.steps.flatMap((step) => step.add.split(' ')))];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let timers: number[] = [];

  const reset = () => {
    timers.forEach(clearTimeout);
    timers = [];
    root.classList.remove(...added, 'is-still');
  };

  // Snap back to the first frame without playing every transition in reverse.
  const rewind = () => {
    root.classList.add('is-rewind');
    reset();
    void root.offsetWidth;
    root.classList.remove('is-rewind');
  };

  const cycle = () => {
    rewind();
    for (const step of loop.steps) {
      timers.push(
        window.setTimeout(() => {
          root.classList.add(...step.add.split(' '));
          step.run?.(root);
        }, step.at),
      );
    }
    timers.push(window.setTimeout(cycle, loop.duration));
  };

  const still = () => {
    reset();
    root.classList.add('is-still', ...loop.still);
    loop.settle?.(root);
  };

  let visible = false;
  const update = () => (reduce.matches ? still() : visible ? cycle() : reset());

  new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting === visible) return;
      visible = entry.isIntersecting;
      update();
    },
    { threshold: 0.35 },
  ).observe(root);
  reduce.addEventListener('change', update);
  if (reduce.matches) still();
}

/** Counts a number up inside `el` from `from` to `to`, easing out, over `ms`. */
export function countUp(el: HTMLElement, to: number, ms: number, decimals = 1, from = 0) {
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / ms);
    el.textContent = (from + (to - from) * (1 - (1 - t) ** 3)).toFixed(decimals);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
