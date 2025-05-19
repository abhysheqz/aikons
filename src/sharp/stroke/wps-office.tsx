import React from "react";
const WpsOffice: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13.5 14.5 2 4h.5L22 6v-.5h-7l-3 6-3.5 7H8L2 6v-.5h7l1.5 3"
      />
    </svg>
  );
};
export default WpsOffice;
