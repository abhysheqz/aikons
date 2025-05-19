import React from "react";
const Pound: React.FC<
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
        d="M10.625 14C9.375 16.917 7.5 19.833 5 21h11.875S18.75 21 20 19.833M15 14H4M18 8.5a5.5 5.5 0 1 0-5.5 5.5"
      />
    </svg>
  );
};
export default Pound;
