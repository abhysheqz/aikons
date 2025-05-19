import React from "react";
const ResizeField: React.FC<
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
        d="m4.5 19.5 15-15v2.752L7.252 19.5zM9.366 19.5 19.5 9.366v2.752L12.118 19.5zM14.231 19.5l5.269-5.269v2.753L16.984 19.5z"
      />
    </svg>
  );
};
export default ResizeField;
