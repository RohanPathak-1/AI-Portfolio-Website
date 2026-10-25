import assert from "node:assert/strict";
import test from "node:test";
import { revealContactSuccess } from "../lib/contact-success.ts";

test("scrolls the rendered success panel below the sticky header and focuses its heading", () => {
  const calls: unknown[] = [];
  revealContactSuccess(
    { scrollIntoView: (options) => calls.push(["scroll", options]) },
    { focus: (options) => calls.push(["focus", options]) },
    false,
  );
  assert.deepEqual(calls, [
    ["scroll", { behavior: "smooth", block: "start" }],
    ["focus", { preventScroll: true }],
  ]);
});

test("uses immediate scrolling when reduced motion is requested", () => {
  let behavior: ScrollBehavior | undefined;
  revealContactSuccess(
    { scrollIntoView: (options) => { behavior = options.behavior; } },
    { focus: () => undefined },
    true,
  );
  assert.equal(behavior, "auto");
});
