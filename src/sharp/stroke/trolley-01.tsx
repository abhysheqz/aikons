import React from "react";
const Trolley_01: React.FC<
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
        d="M22 14.5H12v-5h10zM20 9.5H10v-5h10z"
      />
    </svg>
  );
};
export default Trolley_01;
