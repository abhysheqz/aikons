import React from "react";
const CursorProgress_01: React.FC<
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
        d="m18 12.615 1 .885-6.23.898 2.618 6.48L12.61 22l-2.618-6.48L5 19.5 6 2l2.26 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15.759 2.031a4.2 4.2 0 0 0-1.018 0m1.018 7.938a4.2 4.2 0 0 1-1.018 0M19 4.449a4 4 0 0 0-.509-.866M12.01 8.418a4 4 0 0 1-.509-.866m.508-3.97a4 4 0 0 0-.508.867M19 7.552a4 4 0 0 1-.509.866"
      />
    </svg>
  );
};
export default CursorProgress_01;
