import React from "react";
const BarCode_02: React.FC<
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
      <path fill="currentColor" d="M7.25 3.25h5.5v17.5h-5.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 3.25v17.5h-1.5V3.25zM5.75 3.25v17.5h-1.5V3.25zM15.75 3.25v17.5h-1.5V3.25z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M17.25 3.25h5.5v17.5h-5.5z" />
    </svg>
  );
};
export default BarCode_02;
