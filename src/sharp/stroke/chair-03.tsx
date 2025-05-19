import React from "react";
const Chair_03: React.FC<
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
        d="M7 12h10M7 15h10M7.5 6 6 22M16.5 6 18 22"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 6h12V5c0-1.657-1.151-3-2.571-3H8.57C7.151 2 6 3.343 6 5z"
      />
    </svg>
  );
};
export default Chair_03;
