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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.998 2H4a2 2 0 0 0-2 2v11.997a2 2 0 0 0 2 2h1.999v2.036a1 1 0 0 0 1.588.809l3.912-2.845h8.5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"
      />
    </svg>
  );
};
export default Comment_02;
