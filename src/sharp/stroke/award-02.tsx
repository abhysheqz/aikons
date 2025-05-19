import React from "react";
const Award_02: React.FC<
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
        d="M15.999 22v-4h-8v4M11.999 12.242v5.748M5.999 22h12"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.94 2.044a.1.1 0 0 1 .167.003l2.01 3.205 3.81 1.07a.1.1 0 0 1 .05.16l-2.48 3.032.266 3.878a.1.1 0 0 1-.132.1l-3.605-1.291-3.746 1.293a.1.1 0 0 1-.132-.102l.31-3.878-2.436-3.032a.1.1 0 0 1 .05-.16l3.72-1.07z"
      />
    </svg>
  );
};
export default Award_02;
