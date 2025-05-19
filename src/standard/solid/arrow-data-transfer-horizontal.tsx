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
        d="M8.6 4.2a1 1 0 0 1 .2 1.4L7 8h12a1 1 0 1 1 0 2H5a1 1 0 0 1-.8-1.6l3-4a1 1 0 0 1 1.4-.2M15.4 19.8a1 1 0 0 1-.2-1.4L17 16H5a1 1 0 1 1 0-2h14a1 1 0 0 1 .8 1.6l-3 4a1 1 0 0 1-1.4.2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowDataTransferHorizontal;
