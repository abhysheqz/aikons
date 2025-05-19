import React from "react";
const Facebook_02: React.FC<
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
        d="M5 14.222v-3.889h3.545V2H19v4.444h-5.727v3.89H18l-1.5 3.888h-3.227V22H8.545v-7.778z"
      />
    </svg>
  );
};
export default Facebook_02;
