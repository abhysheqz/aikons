import React from "react";
const UserTime_01: React.FC<
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
        d="M14.02 13.704A5.48 5.48 0 0 0 12.5 17.5c0 1.216.395 2.34 1.062 3.25H2.5a.75.75 0 0 1-.75-.75 7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 9.5 2.25a5.25 5.25 0 0 1 1.755 10.2 7.7 7.7 0 0 1 2.765 1.254"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 13.25a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5m.75 2.75a.75.75 0 0 0-1.5 0v1.5c0 .284.16.544.415.67l1 .5a.75.75 0 1 0 .67-1.34l-.585-.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserTime_01;
