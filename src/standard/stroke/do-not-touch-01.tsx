import React from "react";
const DoNotTouch_01: React.FC<
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
        d="m2 2 20 20M11.5 5.5a1.5 1.5 0 0 0-2.781-.78m2.781.78v-2a1.5 1.5 0 0 1 3 0v2m-3 0v2m7 14.5v-1.5l.889-1.111M8.5 21.999v-1.5l-4.61-6.663a1.74 1.74 0 0 1-.01-2.183 1.736 1.736 0 0 1 2.488-.234l2.132 2.08V8.5m6-3a1.5 1.5 0 0 1 3 0v2m-3-2v5m3-3a1.5 1.5 0 0 1 3 0v9m-3-9v5"
      />
    </svg>
  );
};
export default DoNotTouch_01;
