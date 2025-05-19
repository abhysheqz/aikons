import React from "react";
const ArrowDataTransferHorizontal: React.FC<
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
        d="m7 8.036 1.8-2.357L7.2 4.5l-3 3.929a.97.97 0 0 0-.094 1.028C4.275 9.79 4.62 10 5 10h14V8.036zM17 15.964l-1.8 2.357 1.6 1.179 3-3.929a.97.97 0 0 0 .095-1.028A1 1 0 0 0 19 14H5v1.964z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowDataTransferHorizontal;
