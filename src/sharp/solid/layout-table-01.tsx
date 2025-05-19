import React from "react";
const LayoutTable_01: React.FC<
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
        fill="currentColor"
        d="M10 21.75V10h4v11.75zM8 21.75H3a.75.75 0 0 1-.75-.75V10H8zM2.25 8H8V2.25H3a.75.75 0 0 0-.75.75zM10 2.25V8h4V2.25zM16 2.25V8h5.75V3a.75.75 0 0 0-.75-.75zM21.75 10H16v11.75h5a.75.75 0 0 0 .75-.75z"
      />
    </svg>
  );
};
export default LayoutTable_01;
