import React from "react";
const UserTime_03: React.FC<
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
        d="M5.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m1.918 6.725.557-1.393-1.725-.69V15.25h-1.5v3.658z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.9 12.572A6.25 6.25 0 0 0 10.75 18c0 .987.228 1.92.636 2.75H2.25V18A5.75 5.75 0 0 1 8 12.25h4a5.7 5.7 0 0 1 1.9.322"
      />
    </svg>
  );
};
export default UserTime_03;
