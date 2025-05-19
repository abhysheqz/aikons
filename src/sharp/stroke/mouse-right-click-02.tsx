import React from "react";
const MouseRightClick_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 2v9M17.5 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM3.996 11c0 1.732.121 4.432.253 6.089.19 2.392 2.082 4.422 4.521 4.723.897.11 1.81.188 2.733.188.924 0 1.836-.078 2.733-.188 2.44-.3 4.332-2.332 4.522-4.723.114-1.445.318-4.18.22-6.089M3.996 11c0-1.732.121-2.431.253-4.089C4.439 4.52 6.33 2.49 8.77 2.188A22 22 0 0 1 11.503 2c.924 0 1.108-.01 2.004.1M3.996 11h14.982m.005-.743q0 .335-.005.743"
      />
    </svg>
  );
};
export default MouseRightClick_02;
