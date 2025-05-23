import React from "react";
const Yoga_02: React.FC<
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
        d="M8 10c.713 1.397 1.676 2.89 1.5 4.5-.281 2.573-3.645 3.355-5.72 4.54-1.359.777-.85 2.96.817 2.96 2.023 0 3.828-.155 5.652-.98l3.71-2.2a1 1 0 0 1 1.065.029L16 19.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 10c-1 1.5-1.676 2.89-1.5 4.5.281 2.573 3.645 3.355 5.72 4.54 1.359.777.85 2.96-.817 2.96-2.023 0-3.828-.155-5.652-.98l-3.71-2.2a1 1 0 0 0-1.064.029L8 19.5M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 16c2.446 0 3.544-2.705 3.893-4.57C7.311 9.198 9.916 8 12 8s4.689 1.199 5.107 3.43C17.457 13.294 18.554 16 21 16"
      />
    </svg>
  );
};
export default Yoga_02;
