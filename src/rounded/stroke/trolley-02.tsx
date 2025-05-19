import React from "react";
const Trolley_02: React.FC<
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
        d="M3 2h1.301c1.186 0 1.779 0 2.18.371.402.372.48.992.637 2.233l1.128 8.925c.209 1.654.313 2.48.849 2.976.536.495 1.326.495 2.907.495H22"
      />
      <circle
        cx={11.5}
        cy={19.5}
        r={1.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={18.5}
        cy={19.5}
        r={1.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 14h-2c-1.886 0-2.828 0-3.414-.586S12 11.886 12 10V8c0-1.886 0-2.828.586-3.414S14.114 4 16 4h2c1.886 0 2.828 0 3.414.586S22 6.114 22 8v2c0 1.886 0 2.828-.586 3.414S19.886 14 18 14M16.5 7h1"
      />
    </svg>
  );
};
export default Trolley_02;
