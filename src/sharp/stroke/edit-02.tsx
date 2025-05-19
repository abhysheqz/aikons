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
        d="m11.975 6 6.015 6M12.977 22H22"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 16.008 15.962 2.004a.016.016 0 0 1 .023 0L21.989 8a.01.01 0 0 1 0 .014L7.992 22H2z"
      />
    </svg>
  );
};
export default Edit_02;
