import React from "react";
const OpenSource: React.FC<
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
        d="M12 8.5a4 4 0 0 0-2.24 7.315L7.637 21.5A10 10 0 0 1 2 12.5c0-5.523 4.477-10 10-10s10 4.477 10 10a10 10 0 0 1-5.636 9l-2.125-5.685A4 4 0 0 0 12 8.5"
      />
    </svg>
  );
};
export default OpenSource;
