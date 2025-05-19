import React from "react";
const ArrowExpand: React.FC<
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
        d="M8 3H3v5M8 21H3v-5M16 3h5v5M16 21h5v-5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.441 3.44 6.555 6.555M13.973 13.973l6.554 6.554M20.527 3.44l-6.554 6.555M10.027 13.973l-6.554 6.554"
      />
    </svg>
  );
};
export default ArrowExpand;
