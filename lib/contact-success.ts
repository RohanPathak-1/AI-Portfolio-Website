type ScrollTarget = { scrollIntoView: (options: ScrollIntoViewOptions) => void };
type FocusTarget = { focus: (options: FocusOptions) => void };

export function revealContactSuccess(
  container: ScrollTarget,
  heading: FocusTarget,
  reducedMotion: boolean,
) {
  container.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  heading.focus({ preventScroll: true });
}
