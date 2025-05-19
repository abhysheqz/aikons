import React from "react";
const ArrowDataTransferVertical: React.FC<
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
        d="M14.553 4.105A1 1 0 0 1 15.6 4.2l4 3a1 1 0 1 1-1.2 1.6L16 7v12a1 1 0 1 1-2 0V5a1 1 0 0 1 .553-.895M9 4a1 1 0 0 1 1 1v14a1 1 0 0 1-1.6.8l-4-3a1 1 0 0 1 1.2-1.6L8 17V5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowDataTransferVertical;
