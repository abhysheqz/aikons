import React from "react";
const ArrowLeftDouble: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M11.155 5 12.5 6.414 7.19 12l5.31 5.586L11.155 19 4.5 12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.155 5 19.5 6.414 14.19 12l5.31 5.586L18.155 19 11.5 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowLeftDouble;
