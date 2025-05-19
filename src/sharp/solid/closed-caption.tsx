import React from "react";
const ClosedCaption: React.FC<
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
        fillRule="evenodd"
        d="M2 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM11.5 8H7v8h4.5v-2H9v-4h2.5zM18 8h-4.5v8H18v-2h-2.5v-4H18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ClosedCaption;
