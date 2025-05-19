import React from "react";
const Fry: React.FC<
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
        d="M6.25 9.5a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M15 5.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M10.25 9a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m4.758 1a1 1 0 1 0 0-2h-.01a1 1 0 1 0 0 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.957 14.043a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fry;
