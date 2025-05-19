import React from "react";
const Towels: React.FC<
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
        d="M6.5 3.75A2.25 2.25 0 0 0 4.25 6v.75h-1.5v-3h-1.5V7.5c0 .414.336.75.75.75h3.75V6a.75.75 0 0 1 1.5 0v10.25h9v2.5H5.75V10h-1.5v10.25h13.5v-4h2v-8H22a.75.75 0 0 0 .75-.75V3.75h-1.5v3h-1.5V6.5A2.75 2.75 0 0 0 17 3.75z"
      />
    </svg>
  );
};
export default Towels;
