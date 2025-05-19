import React from "react";
const MinusPlus_02: React.FC<
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
        d="M21.884 2.116a1.25 1.25 0 0 1 0 1.768l-18 18a1.25 1.25 0 0 1-1.768-1.768l18-18a1.25 1.25 0 0 1 1.768 0M17 11.75c.69 0 1.25.56 1.25 1.25v2.75H21a1.25 1.25 0 1 1 0 2.5h-2.75V21a1.25 1.25 0 1 1-2.5 0v-2.75H13a1.25 1.25 0 1 1 0-2.5h2.75V13c0-.69.56-1.25 1.25-1.25M1.75 7c0-.69.56-1.25 1.25-1.25h8a1.25 1.25 0 1 1 0 2.5H3c-.69 0-1.25-.56-1.25-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MinusPlus_02;
