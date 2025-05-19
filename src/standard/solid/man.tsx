import React from "react";
const Man: React.FC<
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
        d="M7.25 10.5A2.75 2.75 0 0 1 10 7.75h4a2.75 2.75 0 0 1 2.75 2.75V16a.75.75 0 0 1-.75.75h-1.25V22a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-5.25H8a.75.75 0 0 1-.75-.75zM9.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default Man;
