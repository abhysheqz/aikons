import React from "react";
const Zap: React.FC<
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
        d="m18 2.598-3.992 6.985a.01.01 0 0 0 .01.015h4.958a.01.01 0 0 1 .007.017L8 20.598l1.997-7.988a.01.01 0 0 0-.01-.012H5.015a.01.01 0 0 1-.009-.014L9.5 2.598z"
      />
    </svg>
  );
};
export default Zap;
