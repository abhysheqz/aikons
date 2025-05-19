import React from "react";
const ComputerCheck: React.FC<
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
        d="M22.75 2.25H1.25v15.5h21.5zM10.5 13.914 16.914 7.5 15.5 6.086l-5 5-2-2L7.086 10.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerCheck;
