import React from "react";
const GolfCart: React.FC<
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
        d="M4 12V3M19 14 16 3M2 3h16"
      />
      <circle
        cx={6}
        cy={19}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={18}
        cy={19}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 14-2-3m-1 1 2-2M4 19H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h4.807a1 1 0 0 1 .936.649l1.014 2.701a1 1 0 0 0 .936.649H14a1 1 0 0 0 .801-.401l1.188-1.588 2.005-.003a4 4 0 0 1 4.007 4V19h-2m-4 0H8M4 8h.234A2 2 0 0 1 6.22 9.752L6.5 12"
      />
    </svg>
  );
};
export default GolfCart;
