import React from "react";
const MoveTop: React.FC<
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
        d="M11.999 22.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 13.233V4.721L8.794 6.647 7.5 5.122 12 1.249l4.5 3.873-1.294 1.525L13 4.72v8.512z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoveTop;
