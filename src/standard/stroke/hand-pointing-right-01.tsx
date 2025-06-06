import React from "react";
const HandPointingRight_01: React.FC<
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
        d="M2 18h2l2.31.999c1.477.707 4.367 1.674 5.728.322 2.145-2.132 2.538-5.113 2.462-6.821h5.75a1.75 1.75 0 1 0 0-3.5H10l2.329-2.217a1.65 1.65 0 0 0-.234-2.414 1.78 1.78 0 0 0-2.184.009L4.003 9H2"
      />
    </svg>
  );
};
export default HandPointingRight_01;
