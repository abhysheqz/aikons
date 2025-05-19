import React from "react";
const Edit_02: React.FC<
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
        d="M21.292 8.707 7.999 22H2v-6L15.292 2.707a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414ZM12 6l6 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 22h-8"
      />
    </svg>
  );
};
export default Edit_02;
