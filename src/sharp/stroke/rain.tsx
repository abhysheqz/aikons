import React from "react";
const Rain: React.FC<
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
        strokeWidth={1.5}
        d="M21 7.5a3.5 3.5 0 1 1-7 0C14 5 17.5 3 17.5 3S21 5 21 7.5ZM10 7.5a3.5 3.5 0 1 1-7 0C3 5 6.5 3 6.5 3S10 5 10 7.5ZM15.5 17.5a3.5 3.5 0 1 1-7 0C8.5 15 12 13 12 13s3.5 2 3.5 4.5Z"
      />
    </svg>
  );
};
export default Rain;
