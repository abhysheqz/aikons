import React from "react";
const TransitionRight: React.FC<
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
        d="M10 22V2H2v20zM14 22h8V2h-8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 12h7.69M15.5 9.5 18 12l-2.5 2.5"
      />
    </svg>
  );
};
export default TransitionRight;
