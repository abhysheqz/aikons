import React from "react";
const ComputerRemove: React.FC<
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
        d="M10.5 15.75h3v3.5a.5.5 0 0 0 .5.5h3v2H7v-2h3a.5.5 0 0 0 .5-.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 2.25H1.25v15.5h21.5zM12 8.586l-2.5-2.5L8.086 7.5l2.5 2.5-2.5 2.5L9.5 13.914l2.5-2.5 2.5 2.5 1.414-1.414-2.5-2.5 2.5-2.5L14.5 6.086z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerRemove;
