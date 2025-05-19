import React from "react";
const TransitionBottom: React.FC<
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
        d="M1.998 10h20V2h-20zM1.998 14v8h20v-8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.998 10v7.625m2.5-2.125-2.5 2.5-2.5-2.5"
      />
    </svg>
  );
};
export default TransitionBottom;
