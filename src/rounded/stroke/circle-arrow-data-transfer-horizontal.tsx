import React from "react";
const CircleArrowDataTransferHorizontal: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 10.286H8.566c-.646 0-.97 0-1.05-.177-.08-.176.148-.384.605-.799L9.564 8M7.5 13.714h7.934c.646 0 .97 0 1.05.177.08.176-.148.384-.605.799L14.436 16"
      />
    </svg>
  );
};
export default CircleArrowDataTransferHorizontal;
