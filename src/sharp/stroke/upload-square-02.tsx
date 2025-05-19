import React from "react";
const UploadSquare_02: React.FC<
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
        d="M8.004 7.004H16m-6.496 5.184 2.498-2.186 2.498 2.19m-2.498 4.812v-6.309"
      />
    </svg>
  );
};
export default UploadSquare_02;
