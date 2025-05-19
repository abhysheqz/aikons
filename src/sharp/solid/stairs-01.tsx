import React from "react";
const Stairs_01: React.FC<
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
        d="M14.75 2.75h6.5v18.5H2.75v-6.5h4v-4h4v-4h4z"
      />
    </svg>
  );
};
export default Stairs_01;
