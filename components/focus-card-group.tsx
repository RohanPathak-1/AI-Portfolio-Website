"use client";

import { Children, cloneElement, isValidElement, useState, type KeyboardEvent, type MouseEvent, type ReactElement, type ReactNode } from "react";

type CardElement = ReactElement<{ className?: string }>;

export function FocusCardGroup({
  children,
  className,
  selectable = true,
  reveal = false,
}: {
  children: ReactNode;
  className: string;
  selectable?: boolean;
  reveal?: boolean;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  function cardIndex(target: EventTarget | null) {
    const card = target instanceof Element ? target.closest<HTMLElement>("[data-focus-card]") : null;
    return card ? Number(card.dataset.cardIndex) : null;
  }

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (!selectable) return;
    const index = cardIndex(event.target);
    if (index !== null) setSelected(index);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!selectable || (event.key !== "Enter" && event.key !== " ")) return;
    const index = cardIndex(event.target);
    if (index === null) return;
    event.preventDefault();
    setSelected(index);
  }

  return (
    <div
      className={className}
      data-focus-group
      data-selectable={selectable ? "true" : "false"}
      data-reveal={reveal ? "group" : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        const card = child as CardElement;
        return cloneElement(card, {
          className: `${card.props.className ?? ""} focus-card`.trim(),
          "data-focus-card": "",
          "data-card-index": index,
          "data-selected": selected === index ? "true" : undefined,
          role: selectable ? "button" : undefined,
          tabIndex: selectable ? 0 : undefined,
          "aria-pressed": selectable ? selected === index : undefined,
        } as Record<string, unknown>);
      })}
    </div>
  );
}
