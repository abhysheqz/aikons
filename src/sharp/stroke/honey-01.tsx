import React from "react";
const Honey_01: React.FC<
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
        d="M18 5H6V2h12z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 5 19 9v13H5V9l2.5-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 13.294v-1.882L12 10l2 1.412v1.882m-4 0 2 1.412m-2-1.412-2 1.412v1.882L10 18l2-1.412m2-3.294-2 1.412m2-1.412 2 1.412v1.882L14 18l-2-1.412m0-1.882v1.882"
      />
    </svg>
  );
};
export default Honey_01;
