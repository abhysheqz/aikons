import React from "react";
const CloudSnow: React.FC<
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
        d="M17 14.751a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 14.751a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 18.751a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 16.751a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 18.751a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 20.751a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
      <path
        fill="currentColor"
        d="M5.853 7.365a5.752 5.752 0 0 0-.345 11.19A2.5 2.5 0 0 1 6.5 16.75a2.5 2.5 0 1 1 4-2 2.5 2.5 0 0 1 1.5-.5 2.5 2.5 0 0 1 1.5.5 2.5 2.5 0 1 1 4 2c.584.438.97 1.126.998 1.905a5.252 5.252 0 0 0-.251-10.352 6.25 6.25 0 0 0-12.394-.938"
      />
    </svg>
  );
};
export default CloudSnow;
