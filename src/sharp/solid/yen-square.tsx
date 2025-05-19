import React from "react";
const YenSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm5.4 5.7 2.85 3.8v1H9v1.5h2.25v2.25h1.5v-2.25H15v-1.5h-2.25v-1l2.85-3.8-1.2-.9-2.4 3.2-2.4-3.2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default YenSquare;
