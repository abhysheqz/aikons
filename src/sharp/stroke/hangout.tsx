import React from "react";
const Hangout: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6.525 11.96-.043-3.916a.05.05 0 0 1 .05-.05h3.93a.05.05 0 0 1 .05.05v2.78c.186 2.674-1.299 3.268-2.172 3.214a.05.05 0 0 1-.045-.05V12.01h-1.72a.05.05 0 0 1-.05-.05ZM13.527 11.96l-.043-3.916a.05.05 0 0 1 .05-.05h3.93a.05.05 0 0 1 .05.05v2.78c.186 2.674-1.299 3.268-2.172 3.214a.05.05 0 0 1-.045-.05V12.01h-1.72a.05.05 0 0 1-.05-.05Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.001 11C3.001 15.97 7.03 20 12 20v2.001c.753 0 1.782-.305 2.35-.613 3.165-1.653 6.649-5.985 6.649-10.39 0-4.971-4.029-9.001-8.999-9.001s-8.999 4.03-8.999 9.001Z"
      />
    </svg>
  );
};
export default Hangout;
