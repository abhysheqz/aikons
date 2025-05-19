import React from "react";
const Highlighter: React.FC<
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
        d="m13.735 3.5-4.94 4.941 7.764 7.765 4.941-4.941m-14.824 4.94 2.118 2.119L6.5 20.5h-4zm-.705-.705L9.5 19.03c2.47-2.471 4.588-1.765 4.588-1.765l1.765-1.765L9.5 9.147l-1.765 1.765s.706 2.117-1.764 4.588Z"
      />
    </svg>
  );
};
export default Highlighter;
