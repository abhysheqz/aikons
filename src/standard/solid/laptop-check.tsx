import React from "react";
const LaptopCheck: React.FC<
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
        d="M2.661 17.112H22.09l1.457 2.914a.75.75 0 0 1-.671 1.086h-21a.75.75 0 0 1-.67-1.086zM19.375 2.612a2.25 2.25 0 0 1 2.25 2.25v10.75h-18.5V4.862a2.25 2.25 0 0 1 2.25-2.25zm-2.753 3.836A1 1 0 0 0 15.29 6.3l-.08.065-3.772 3.352-.834-.89a1 1 0 0 0-1.458 1.369l1.5 1.6.072.07a1 1 0 0 0 1.321-.007l4.5-4 .073-.071a1 1 0 0 0 .01-1.34"
      />
    </svg>
  );
};
export default LaptopCheck;
