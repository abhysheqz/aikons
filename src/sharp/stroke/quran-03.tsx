import React from "react";
const Quran_03: React.FC<
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
        strokeWidth={1.5}
        d="M15.5 10.434A3.23 3.23 0 1 1 11.066 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.066 7.435h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.017 19.099V6.156c-.171-2.863.968-3.941 2.88-4.155h14.088V16l-2 .01M4.017 19.099c0 1.653 1.322 2.9 2.974 2.9h11.994m-14.968-2.9c0-1.654 1.322-3.09 2.974-3.09h11.994m0 0V22m2.016 0h-2.016"
      />
    </svg>
  );
};
export default Quran_03;
