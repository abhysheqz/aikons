import React from "react";
const Upload_03: React.FC<
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
        d="m20.73 11.733-3.177-1.589.895-1.788 3.999 2a1 1 0 0 1 .481 1.265l-3.999 10a1 1 0 0 1-.928.629H6a1 1 0 0 1-.929-.629l-3.998-10a1 1 0 0 1 .48-1.265l4-2 .894 1.788-3.176 1.589 3.406 8.517h10.646z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12.002 1.75 3.707 3.707-1.414 1.415-1.293-1.293v7.585h-2V5.58L9.71 6.872 8.295 5.457z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Upload_03;
