import React from "react";
const CircleArrowRightDouble: React.FC<
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
        d="M12.915 15s2.585-2.21 2.585-3-2.585-3-2.585-3M8.5 15s2.585-2.21 2.585-3S8.5 9 8.5 9"
      />
    </svg>
  );
};
export default CircleArrowRightDouble;
