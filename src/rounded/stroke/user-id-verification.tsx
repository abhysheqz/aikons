import React from "react";
const UserIdVerification: React.FC<
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
        d="M15 21.5c1.395 0 2.092 0 2.667-.138a5 5 0 0 0 3.695-3.695c.138-.575.138-1.272.138-2.667M9 21.5c-1.395 0-2.092 0-2.667-.138a5 5 0 0 1-3.695-3.695C2.5 17.092 2.5 16.395 2.5 15M9 2.5c-1.395 0-2.092 0-2.667.138a5 5 0 0 0-3.695 3.695C2.5 6.908 2.5 7.606 2.5 9M15 2.5c1.395 0 2.092 0 2.667.138a5 5 0 0 1 3.695 3.695c.138.575.138 1.273.138 2.667M15 9.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 17.5a5 5 0 0 0-10 0"
      />
    </svg>
  );
};
export default UserIdVerification;
