import React from "react";
const SquareArrowDataTransferVertical: React.FC<
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
        d="M2.999 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm11.468 4.664a.75.75 0 0 0-1.218.586v9h1.5V9.06l1.281 1.026.937-1.172zM10.75 16.5v-9h-1.5v7.44l-1.282-1.025-.937 1.17 2.5 2a.75.75 0 0 0 1.219-.585"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowDataTransferVertical;
