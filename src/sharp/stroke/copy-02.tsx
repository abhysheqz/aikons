import React from "react";
const Copy_02: React.FC<
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
        d="M9.014 13.99v2.986H2.012a.01.01 0 0 1-.01-.01V2.01a.01.01 0 0 1 .01-.01h14.977a.01.01 0 0 1 .01.01v6.96h-2.997m-2.014-.001h-3.01a.01.01 0 0 0-.01.01v3.025M18.979 22h3.01a.01.01 0 0 0 .01-.01v-3.025m-.007-4.962v2.998m-5.01 4.989h-2.98m-2.013.01h-3.01a.01.01 0 0 1-.01-.01v-2.002M19.982 8.997h2.006a.01.01 0 0 1 .01.01v2.991"
      />
    </svg>
  );
};
export default Copy_02;
