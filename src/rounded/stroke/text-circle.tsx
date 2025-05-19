import React from "react";
const TextCircle: React.FC<
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
        d="M10.319 16.978h1.648m0 0h1.664m-1.664 0v-9.48m-4.961 1.72c-.138-1.057.138-1.524 1.11-1.786 2.49-.67 5.193-.557 7.697.06.943.234 1.265.649 1.13 1.726"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
    </svg>
  );
};
export default TextCircle;
