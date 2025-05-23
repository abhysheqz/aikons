import React from "react";
const User_02: React.FC<
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
        d="M18.5 20v-3.015c0-.621-.282-1.22-.816-1.536C16.157 14.546 14.17 14 12 14s-4.157.546-5.684 1.45c-.534.316-.816.914-.816 1.535V20"
      />
      <circle
        cx={12}
        cy={7.5}
        r={3.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default User_02;
