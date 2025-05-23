import React from "react";
const UserWarning_02: React.FC<
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
      <circle
        cx={11.5}
        cy={7.5}
        r={3.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 6v4M19 13v.01M18 20v-3.015c0-.621-.282-1.22-.816-1.536C15.657 14.546 13.67 14 11.5 14s-4.157.546-5.684 1.45c-.534.316-.816.914-.816 1.535V20"
      />
    </svg>
  );
};
export default UserWarning_02;
