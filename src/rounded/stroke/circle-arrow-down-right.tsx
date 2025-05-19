import React from "react";
const CircleArrowDownRight: React.FC<
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
        d="M14.773 14.773 9 9m5.773 5.773c-.505.505-2.888.01-3.608 0m3.608 0c.505-.505.01-2.888 0-3.608"
      />
    </svg>
  );
};
export default CircleArrowDownRight;
