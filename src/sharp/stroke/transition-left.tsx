import React from "react";
const TransitionLeft: React.FC<
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
        d="M14 22V2h8v20zM10 22H2V2h8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 12H6.407M8.5 9.5 6 12l2.5 2.5"
      />
    </svg>
  );
};
export default TransitionLeft;
