import React from "react";
const Basketball_02: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 12c2.28 2.429 5.91 4 10 4s7.72-1.571 10-4M12 2v20"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.156 5c-.382 1.5-.116 4 1.41 6 1.605 2.103 2.616 5-1.197 8M18.844 5c.382 1.5.116 4-1.41 6-1.605 2.103-2.616 5 1.197 8"
      />
    </svg>
  );
};
export default Basketball_02;
