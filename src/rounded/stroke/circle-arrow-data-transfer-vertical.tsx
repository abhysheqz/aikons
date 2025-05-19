import React from "react";
const CircleArrowDataTransferVertical: React.FC<
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
        d="M10.286 7.5v7.934c0 .646 0 .97-.177 1.05-.176.08-.384-.148-.799-.605L8 14.436m5.714 2.064V8.566c0-.646 0-.97.177-1.05.176-.08.384.148.799.605L16 9.564"
      />
    </svg>
  );
};
export default CircleArrowDataTransferVertical;
