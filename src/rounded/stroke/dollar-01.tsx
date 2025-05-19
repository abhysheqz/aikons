import React from "react";
const Dollar_01: React.FC<
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
        strokeWidth={1.5}
        d="M17.958 8.389C17.958 6.24 15.291 4.5 12 4.5c-3.29 0-5.958 1.741-5.958 3.889S7.667 11.722 12 11.722s6.5 1.111 6.5 3.89c0 2.777-2.91 3.888-6.5 3.888s-6.5-1.741-6.5-3.889"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 2.5v1.71m0 17.29v-1.71"
      />
    </svg>
  );
};
export default Dollar_01;
