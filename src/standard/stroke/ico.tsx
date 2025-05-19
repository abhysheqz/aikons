import React from "react";
const Ico: React.FC<
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 9.5v5m6-.5c-.32.32-.754.5-1.207.5h-.22A2.074 2.074 0 0 1 8.5 12.427v-.853c0-1.145.928-2.074 2.074-2.074h.219c.453 0 .887.18 1.207.5m2.5 1.5v1a2 2 0 1 0 4 0v-1a2 2 0 1 0-4 0"
      />
    </svg>
  );
};
export default Ico;
