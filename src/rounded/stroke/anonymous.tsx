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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6M17 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6M14 17h-4M22 13c-2.457-1.228-6.027-2-10-2s-7.543.772-10 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19 11.5-1.058-6.788c-.215-1.384-1.719-2.134-2.933-1.463l-.615.34a4.94 4.94 0 0 1-4.788 0l-.615-.34c-1.214-.671-2.718.08-2.933 1.463L5 11.5"
      />
    </svg>
  );
};
export default Anonymous;
