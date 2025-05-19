import React from "react";
const Anonymous: React.FC<
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
        d="M7 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM17 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM14 17h-4M22 13c-2.457-1.227-6.027-2-10-2s-7.543.773-10 2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 11.5 18 2h-.5c-3.117 2.667-7.883 2.667-11 0H6l-1 9.5"
      />
    </svg>
  );
};
export default Anonymous;
