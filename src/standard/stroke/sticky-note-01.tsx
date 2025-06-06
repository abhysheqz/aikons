import React from "react";
const StickyNote_01: React.FC<
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
        strokeWidth={1.5}
        d="m10.112 5-.527 2M11.8 2.763a1.54 1.54 0 0 1-.55 2.084 1.486 1.486 0 0 1-2.048-.558 1.54 1.54 0 0 1 .55-2.084 1.486 1.486 0 0 1 2.048.558Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.5 4.5 3.789 6.404A2 2 0 0 0 2.49 8.82L5.2 18.885a2 2 0 0 0 1.416 1.412l5.805 1.549a2 2 0 0 0 1.148-.035l6.6-2.2a2 2 0 0 0 1.287-2.462l-3.871-13.16a2 2 0 0 0-2.551-1.334L12 3.667"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m5.5 20 1.78-2.034a2 2 0 0 1 3.169.208L13 22"
      />
    </svg>
  );
};
export default StickyNote_01;
