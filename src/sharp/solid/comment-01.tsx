import React from "react";
const Comment_01: React.FC<
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
        d="m5.25 22.75 6.013-4H22.75V1.25H1.25v17.5h4zM8 13.25h8v-1.5H8zm0-5h4v-1.5H8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Comment_01;
