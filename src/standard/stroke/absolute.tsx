import React from "react";
const Absolute: React.FC<
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
        d="M18.5 3H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1.5m-13 0H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1.5M7.5 8h1.264a2 2 0 0 1 1.789 1.106l2.894 5.788A2 2 0 0 0 15.237 16H16.5m.5-8h-.593a2 2 0 0 0-1.505.683l-5.804 6.634A2 2 0 0 1 7.592 16H7"
      />
    </svg>
  );
};
export default Absolute;
