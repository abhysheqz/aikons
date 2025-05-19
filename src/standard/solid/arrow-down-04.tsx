import React from "react";
const ArrowDown_04: React.FC<
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
        d="M12 3a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.118 13.528A1 1 0 0 1 8 13h8a1 1 0 0 1 .832 1.555l-4 6a1 1 0 0 1-1.664 0l-4-6a1 1 0 0 1-.05-1.027"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowDown_04;
