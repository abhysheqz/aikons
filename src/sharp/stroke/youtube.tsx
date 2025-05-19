import React from "react";
const Youtube: React.FC<
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
        d="M16 12 9 8v8z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 5c-2.785-.628-6.248-1-10-1s-7.214.372-10 1v14c2.786.628 6.248 1 10 1s7.215-.372 10-1z"
      />
    </svg>
  );
};
export default Youtube;
