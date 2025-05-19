import React from "react";
const Chess_02: React.FC<
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
        strokeWidth={1.5}
        d="M11.926 10.97c0 .801.513 2.096 1.609 3L16.5 16.5l.005 2.5 1.47 3H6.5L8 19v-4l-.487-.622C4.7 10.551 6.173 6.834 8.964 5.397 8.964 3.652 10 2 11.691 2c.55.346.517 2 .235 3 1.208 0 2.192 1 2.192 2L17 10l-2 2-1.5-1.5s-1.16.494-1.574.47Zm0 0c-.555-.03-1.21-.287-1.905-.97"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 19h8"
      />
    </svg>
  );
};
export default Chess_02;
