import React from "react";
const Lottiefiles: React.FC<
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
        d="M21 3H3v18h18z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18 7.5h-1.146a4 4 0 0 0-3.497 2.057l-2.714 4.886A4 4 0 0 1 7.146 16.5H6"
      />
    </svg>
  );
};
export default Lottiefiles;
