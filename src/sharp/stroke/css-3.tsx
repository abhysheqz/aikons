import React from "react";
const Css_3: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20.5 2.5h-17l2 17 6 2 7-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M7.5 6.5h9V7l-8.556 3.5L8 11h8l-.5 5-3.5 1-3.5-1-.2-2"
      />
    </svg>
  );
};
export default Css_3;
