import React from "react";
const Maping: React.FC<
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
        d="M7.25 2.536V3.56a.75.75 0 0 0 1.5 0V2.505l5.5 2.357v1.069a.75.75 0 0 0 1.5 0V5.25H21c.966 0 1.75.783 1.75 1.75v13A1.75 1.75 0 0 1 21 21.75h-5.25v-1.08a.75.75 0 0 0-1.5 0v.824l-5.5-2.357v-.564a.75.75 0 0 0-1.5 0v.467l-3.697 1.233a1.75 1.75 0 0 1-2.303-1.66V6.617c0-.663.375-1.27.967-1.566zM8 5.696a.75.75 0 0 1 .75.75v1.155a.75.75 0 0 1-1.5 0V6.446a.75.75 0 0 1 .75-.75M8 9.74a.75.75 0 0 1 .75.75v1.154a.75.75 0 0 1-1.5 0V10.49a.75.75 0 0 1 .75-.75m0 4.042a.75.75 0 0 1 .75.75v1.155a.75.75 0 0 1-1.5 0V14.53a.75.75 0 0 1 .75-.75m7.75-5.016a.75.75 0 0 0-1.5 0V9.9a.75.75 0 0 0 1.5 0zm0 3.968a.75.75 0 0 0-1.5 0v1.134a.75.75 0 0 0 1.5 0zm0 3.969a.75.75 0 1 0-1.5 0v1.133a.75.75 0 1 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Maping;
