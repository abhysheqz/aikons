import React from "react";
const UploadSquare_01: React.FC<
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
        d="M21 21H3V3h18z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 16V8.38M9 11l3-3 3 3"
      />
    </svg>
  );
};
export default UploadSquare_01;
