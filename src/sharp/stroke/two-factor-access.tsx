import React from "react";
const TwoFactorAccess: React.FC<
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
        d="M15 20.5v-11H2v11zM11.75 9.5V6.75a3.25 3.25 0 0 0-6.5 0V9.5M18.75 9.5V6.75A3.25 3.25 0 0 0 14 3.866M18 9.5h4v11h-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M6.5 15.5 8 17l3.5-4"
      />
    </svg>
  );
};
export default TwoFactorAccess;
