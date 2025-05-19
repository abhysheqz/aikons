import React from "react";
const CursorPointer_01: React.FC<
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
        d="M8.316 9.808c-.323-.927.568-1.814 1.492-1.492l12.063 4.193c.938.326 1.072 1.597.221 2.11l-2.89 1.745 3.202 3.182c.46.457.461 1.201.003 1.66l-1.202 1.2c-.458.458-1.2.458-1.658 0l-3.195-3.193-1.73 2.869c-.512.85-1.784.718-2.11-.22z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 5.75a2.75 2.75 0 0 0-1.417 5.108.75.75 0 0 1-.774 1.284 4.25 4.25 0 1 1 5.833-5.833.75.75 0 1 1-1.284.774A2.75 2.75 0 0 0 8.5 5.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.507 2.75a5.757 5.757 0 0 0-.37 11.502.75.75 0 0 1-.096 1.496A7.257 7.257 0 1 1 15.75 8.04a.75.75 0 1 1-1.498.095A5.757 5.757 0 0 0 8.508 2.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorPointer_01;
