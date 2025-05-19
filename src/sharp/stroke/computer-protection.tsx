import React from "react";
const ComputerProtection: React.FC<
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
        d="M12.014 3H2v15h20v-6M10.493 14.958h2.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.987 18v4m0 0H16m-4.013 0H8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 5.5V3c-2 0-3.5-1-3.5-1S17 3 15 3v2.5C15 9 18.5 10 18.5 10S22 9 22 5.5Z"
      />
    </svg>
  );
};
export default ComputerProtection;
