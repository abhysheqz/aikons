import React from "react";
const Comment_02: React.FC<
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
        d="m11.263 18.75-6.013 4v-4h-4V1.25h21.5v17.5z"
      />
    </svg>
  );
};
export default Comment_02;
