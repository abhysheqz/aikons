import React from "react";
const CancelSquare: React.FC<
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
        d="M5 2.25A2.75 2.75 0 0 0 2.25 5v14A2.75 2.75 0 0 0 5 21.75h14A2.75 2.75 0 0 0 21.75 19V5A2.75 2.75 0 0 0 19 2.25zm10.55 7.615a1 1 0 1 0-1.415-1.414L12 10.586 9.865 8.45a1 1 0 0 0-1.414 1.414L10.586 12 8.45 14.134a1 1 0 0 0 1.414 1.415L12 13.414l2.135 2.135a1 1 0 0 0 1.415-1.414L13.414 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CancelSquare;
