import React from "react";
const Edit_01: React.FC<
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
        d="M6 15H3.75a1.75 1.75 0 1 0 0 3.5h9.5a1.75 1.75 0 1 1 0 3.5H11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 15v-1.843a4 4 0 0 1 1.172-2.829l7.62-7.62a1 1 0 0 1 1.415 0l2.086 2.085a1 1 0 0 1 0 1.414l-7.621 7.621A4 4 0 0 1 10.843 15z"
      />
    </svg>
  );
};
export default Edit_01;
