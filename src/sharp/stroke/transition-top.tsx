import React from "react";
const TransitionTop: React.FC<
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
        d="M1.999 14h20v8h-20zM2 10V2h20v8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 14V6.207M14.5 8.5 12 6 9.5 8.5"
      />
    </svg>
  );
};
export default TransitionTop;
