import React from "react";
const Doctor_02: React.FC<
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
        d="M4 22v-4a2 2 0 0 1 2-2h3l3 4 3-4h3a2 2 0 0 1 2 2v4M15.937 8l1.018-4.136C17.188 2.917 16.483 2 15.523 2H8.477c-.96 0-1.665.917-1.432 1.864L8.063 8m7.874 0v2c0 2.209-1.762 4-3.937 4s-3.937-1.791-3.937-4V8m7.874 0H8.063M12 4v2m1-1h-2"
      />
    </svg>
  );
};
export default Doctor_02;
