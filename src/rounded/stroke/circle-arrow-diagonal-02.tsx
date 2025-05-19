import React from "react";
const CircleArrowDiagonal_02: React.FC<
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
        strokeWidth={1.5}
        d="M15.758 15.758 8.242 8.242m7.516 7.516c-.421.421-2.257.158-2.818.188m2.818-.188c.421-.421.158-2.257.188-2.818M8.242 8.242c-.421.421-.158 2.257-.188 2.818m.188-2.818c.421-.421 2.257-.158 2.818-.188"
      />
    </svg>
  );
};
export default CircleArrowDiagonal_02;
