import React from "react";
const FlowSquare: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M13.5 1.25A1.75 1.75 0 0 0 11.75 3v.5H7.5a3 3 0 0 0-3 3v1.75H3A1.75 1.75 0 0 0 1.25 10v4c0 .966.784 1.75 1.75 1.75h1.5v1.75a3 3 0 0 0 3 3h4.25v.5c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 18.25 21v-.5H22a1 1 0 0 0 0-2h-3.75V18a1.75 1.75 0 0 0-1.75-1.75h-3A1.75 1.75 0 0 0 11.75 18v.5H7.5a1 1 0 0 1-1-1v-1.75H8A1.75 1.75 0 0 0 9.75 14v-4A1.75 1.75 0 0 0 8 8.25H6.5V6.5a1 1 0 0 1 1-1h4.25V6c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 18.25 6v-.5H22a1 1 0 0 0 0-2h-3.75V3a1.75 1.75 0 0 0-1.75-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlowSquare;
