import React from "react";
const Logout_04: React.FC<
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
        d="M7.577 6.333a8 8 0 1 0 8.846 0l1.107-1.666A9.99 9.99 0 0 1 22 13c0 5.523-4.477 10-10 10S2 18.523 2 13a9.99 9.99 0 0 1 4.47-8.333z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 1v8.586l1.5-1.5L15.914 9.5 12 13.414 8.086 9.5 9.5 8.086l1.5 1.5V1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Logout_04;
