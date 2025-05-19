import React from "react";
const Delete_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.5 5.5-.886 14.621A2 2 0 0 1 16.617 22H7.383a2 2 0 0 1-1.996-1.879L4.5 5.5M3 5.5h5m13 0h-5m0 0-1.24-2.894A1 1 0 0 0 13.84 2h-3.68a1 1 0 0 0-.92.606L8 5.5m8 0H8M9.5 16.5v-6M14.5 16.5v-6"
      />
    </svg>
  );
};
export default Delete_02;
