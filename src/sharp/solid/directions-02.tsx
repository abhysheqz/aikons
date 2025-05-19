import React from "react";
const Directions_02: React.FC<
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
        d="M17.36 7.75H13v13h2v2H9v-2h2V1.25h6.36l2.6 3.25zM9.5 6.25H6.6L4 9.5l2.6 3.25h2.9z"
      />
      <path fill="currentColor" d="M14.5 17.75h2.9L20 14.5l-2.6-3.25h-2.9z" />
    </svg>
  );
};
export default Directions_02;
