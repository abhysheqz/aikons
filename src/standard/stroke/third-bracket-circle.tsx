import React from "react";
const ThirdBracketCircle: React.FC<
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
        strokeWidth={1.5}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 8H9a1 1 0 0 0-1 1v1.197a1 1 0 0 1-.168.555L7 12l.832 1.248a1 1 0 0 1 .168.555V15a1 1 0 0 0 1 1h.5m5-8h.5a1 1 0 0 1 1 1v1.197a1 1 0 0 0 .168.555L17 12l-.832 1.248a1 1 0 0 0-.168.555V15a1 1 0 0 1-1 1h-.5"
      />
    </svg>
  );
};
export default ThirdBracketCircle;
