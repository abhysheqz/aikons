import React from "react";
const ArrowUpLeft_01: React.FC<
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
        d="M8.415 7h4.586V5H5v8h2V8.414L17.587 19 19 17.586z"
      />
    </svg>
  );
};
export default ArrowUpLeft_01;
