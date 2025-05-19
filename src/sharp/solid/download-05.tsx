import React from "react";
const Download_05: React.FC<
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
        fillRule="evenodd"
        d="M13 4.5v7.586l1.293-1.293 1.414 1.414L12 15.914l-3.707-3.707 1.414-1.414L11 12.086V4.5zM19 19.5H5v-2h14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Download_05;
