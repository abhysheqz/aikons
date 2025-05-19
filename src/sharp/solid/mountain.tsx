import React from "react";
const Mountain: React.FC<
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
        d="M14 8.25a.75.75 0 0 1 .607.309l8 11A.75.75 0 0 1 22 20.75H6a.75.75 0 0 1-.607-1.191l8-11A.75.75 0 0 1 14 8.25M9.687 3.7a.75.75 0 0 0-1.374 0l-7 16A.75.75 0 0 0 2 20.75h2.146a2 2 0 0 1 .237-1.926l7.443-10.235z"
      />
    </svg>
  );
};
export default Mountain;
