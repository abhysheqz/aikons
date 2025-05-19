import React from "react";
const Access: React.FC<
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
        strokeWidth={2}
        d="M6.98 6.993h.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.991 14.115h10.01v6.062h-10.01M14.994 5.023h7.007v6.062h-7.007"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.004 2.002c-2.764 0-5.005 2.259-5.005 5.045a5.05 5.05 0 0 0 2.455 4.343v8.252L6.65 21.85a.496.496 0 0 0 .707 0l2.187-2.21v-1.505L8.295 16.45a.51.51 0 0 1 .044-.657l1.205-1.236v-3.16c1.476-.931 2.465-2.385 2.465-4.349 0-2.786-2.24-5.045-5.005-5.045Z"
      />
    </svg>
  );
};
export default Access;
