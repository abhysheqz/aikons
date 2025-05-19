import React from "react";
const Steering: React.FC<
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
        d="M19 10.5c-.97.424-2.515.718-3.84.217C13.264 10 12.29 10 12 10s-1.264 0-3.16.717c-1.325.501-2.87.207-3.84-.217m14 3c-2 0-5.5 1.5-5.5 5.5m-3 0c0-4-3.5-5.5-5.5-5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.008 13h-.009"
      />
    </svg>
  );
};
export default Steering;
