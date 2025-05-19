import React from "react";
const CircleArrowLeftRight: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.55}
        d="M8.5 9.3h7m-7 0c0-.704 1.75-1.8 1.75-1.8M8.5 9.3c0 .704 1.75 1.8 1.75 1.8m5.25 3.6h-7m7 0c0-.704-1.75-1.8-1.75-1.8m1.75 1.8c0 .704-1.75 1.8-1.75 1.8"
      />
    </svg>
  );
};
export default CircleArrowLeftRight;
