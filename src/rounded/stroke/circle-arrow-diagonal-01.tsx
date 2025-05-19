import React from "react";
const CircleArrowDiagonal_01: React.FC<
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
        d="m8.242 15.758 7.516-7.516m-7.516 7.516c.421.421 2.257.158 2.818.188m-2.818-.188c-.421-.421-.158-2.257-.188-2.818m7.704-4.698c.421.421.158 2.257.188 2.818m-.188-2.818c-.421-.421-2.257-.158-2.818-.188"
      />
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default CircleArrowDiagonal_01;
