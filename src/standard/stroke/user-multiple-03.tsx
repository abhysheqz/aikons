import React from "react";
const UserMultiple_03: React.FC<
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
        d="M16.5 20v-3.015c0-.621-.282-1.22-.816-1.536C14.157 14.546 12.17 14 10 14s-4.157.546-5.684 1.45c-.534.316-.816.914-.816 1.535V20"
      />
      <circle
        cx={10}
        cy={7.5}
        r={3.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 20.001v-3.015c0-.621-.282-1.22-.816-1.536A9.7 9.7 0 0 0 18 14.668"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 4.145a3.502 3.502 0 0 1 0 6.71"
      />
    </svg>
  );
};
export default UserMultiple_03;
