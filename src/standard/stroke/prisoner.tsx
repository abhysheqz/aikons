import React from "react";
const Prisoner: React.FC<
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
        d="M9 13.5 8 17m0 0 3.4 2.55a1 1 0 0 0 1.2 0L16 17m-8 0-3.154 1.051A4.16 4.16 0 0 0 2 22m14-5-1-3.5m1 3.5 3.154 1.051A4.16 4.16 0 0 1 22 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 7V5.956c0-1.345.921-2.591 2.428-3.283C10.255 2.293 11.072 2 12 2s1.745.293 2.573.673C16.078 3.365 17 4.61 17 5.956V7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 7 .18 2.511a4.833 4.833 0 0 0 9.64 0L17 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 7c-1.671-.628-3.749-1-6-1s-4.329.372-6 1"
      />
    </svg>
  );
};
export default Prisoner;
