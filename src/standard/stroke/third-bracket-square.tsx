import React from "react";
const ThirdBracketSquare: React.FC<
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
        d="M2.5 19.5a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2z"
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
export default ThirdBracketSquare;
