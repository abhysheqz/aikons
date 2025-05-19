import React from "react";
const Tire: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 12a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M17.63 8.75l-4.33 2.5m-2.599 1.5-4.33 2.5M17.63 15.25l-4.33-2.5m-2.599-1.5-4.33-2.5M12 5.5v5m0 3v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      />
    </svg>
  );
};
export default Tire;
