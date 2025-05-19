import React from "react";
const Dress_04: React.FC<
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
        d="M8.998 4V2M14.998 4V2M13.998 15.003s2 3 2 6.502m-6-6.502s-2 3-2 6.502"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.006 10 7.01 6.03a.01.01 0 0 1 .001-.01l1.996-2.025 2.995 2.03 2.994-2.03 2.012 2.024a.01.01 0 0 1 .002.012l-2.014 3.968m-5.989 0h5.99m-5.99 0C6.308 12.193 4 16.125 4 19.99c7.18 3.676 13.124 1.465 16-.01 0-4.709-2.988-8.231-5.005-9.98"
      />
    </svg>
  );
};
export default Dress_04;
