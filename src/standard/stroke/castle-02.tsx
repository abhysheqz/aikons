import React from "react";
const Castle_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 22 4 8h2.5l.749 1.871a1 1 0 0 0 .928.629h.646a1 1 0 0 0 .928-.629L10.5 8h3l.749 1.871a1 1 0 0 0 .928.629h.646a1 1 0 0 0 .928-.629L17.5 8H20l1 14zM12 5c1.491.684 4-.5 4-3-1.642.623-2.49.614-4 0zm0 0v3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 22 .84-4.196a1 1 0 0 1 .98-.804h2.36a1 1 0 0 1 .98.804L15 22M11 14h2"
      />
    </svg>
  );
};
export default Castle_02;
