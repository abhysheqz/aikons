import React from "react";
const UserWarning_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m18 20.5 2-2c-1.2-3.303-4.486-5-8-5-3.513 0-6.8 1.697-8 5l2 2zM15.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM19 5v4M19 12v.01"
      />
    </svg>
  );
};
export default UserWarning_01;
