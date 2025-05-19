import React from "react";
const Ramadhan_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 12.305C2.5 17.659 6.84 22 12.195 22c4.406 0 8.125-2.939 9.305-6.963A8.618 8.618 0 0 1 9.463 3C5.44 4.18 2.5 7.899 2.5 12.305Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.55}
        d="M15.107 10 18 8.519 20.893 10l-.643-2.963 2.25-2.074-3.14-.244L18 2l-1.36 2.719-3.14.244 2.25 2.074z"
      />
    </svg>
  );
};
export default Ramadhan_01;
