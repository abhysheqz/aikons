import React from "react";
const UploadCircle_02: React.FC<
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
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.996 8H15m-2.984 9v-5.677m-2.508 1.693 2.495-2.005 2.507 2.005"
      />
    </svg>
  );
};
export default UploadCircle_02;
