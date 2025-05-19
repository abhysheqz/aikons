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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.874 19.914.537-.514c.573-.55.785-1.381.378-2.053C18.244 14.803 15.213 13.5 12 13.5s-6.245 1.303-7.789 3.847c-.407.672-.195 1.503.378 2.053l.537.514c.391.375.922.586 1.476.586h10.796c.554 0 1.085-.211 1.476-.586M15.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M19 5v4M19 12v.01"
      />
    </svg>
  );
};
export default UserWarning_01;
