import React from "react";
const CursorLoading_02: React.FC<
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
        d="m2.5 2 16 6.222-7.111 2.667L8.722 18z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18 17.5c1.933 0 3.5-1.511 3.5-3.375V13h-7v1.125c0 1.864 1.567 3.375 3.5 3.375Zm0 0c1.933 0 3.5 1.511 3.5 3.375V22h-7v-1.125c0-1.864 1.567-3.375 3.5-3.375Z"
      />
    </svg>
  );
};
export default CursorLoading_02;
