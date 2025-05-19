import React from "react";
const Mouse_13: React.FC<
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
        d="M5.185 18.994c4.295 2.437 7.09.118 9.184-3.448s2.74-7.103-1.554-9.54-7.09-.118-9.184 3.448-2.74 7.103 1.554 9.54Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 8 2.5-4 6 3.5 1.5-2M8.5 11l2.5 1.5L13 9l-2.5-1.5z"
      />
    </svg>
  );
};
export default Mouse_13;
