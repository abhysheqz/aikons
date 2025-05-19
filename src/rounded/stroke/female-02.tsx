import React from "react";
const Female_02: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.5 16.5 3.716 1.118a4.07 4.07 0 0 1 2.76 2.892c.136.536-.327.99-.882.99H3.906c-.555 0-1.018-.454-.882-.99a4.07 4.07 0 0 1 2.76-2.892L9.5 16.5v-2.155c-1.285-.163-2.47-.448-3.5-.829.5-.984 1-2.46 1-5.903 0-5.904 5.5-5.904 7-3.936 3-.492 3 1.968 3 4.92 0 2.36.667 4.263 1 4.92-1.03.38-2.215.665-3.5.828z"
      />
    </svg>
  );
};
export default Female_02;
