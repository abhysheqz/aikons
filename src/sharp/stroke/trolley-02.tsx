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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 2.5h4l2 15h14"
      />
      <circle
        cx={11.5}
        cy={20}
        r={1.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={18.5}
        cy={20}
        r={1.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 14.5H11v-10h10z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 7.5h3"
      />
    </svg>
  );
};
export default Trolley_02;
