import React from "react";
const Queue_01: React.FC<
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
        d="M4 13v4h16v-4h2v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 13h12v2H6zM6 9h12v2H6zM6 5h12v2H6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Queue_01;
