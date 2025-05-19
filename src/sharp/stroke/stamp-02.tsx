import React from "react";
const Stamp_02: React.FC<
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
        d="M10 15c0-.998-.034-3.365-1.781-6.73C7.443 6.777 7.56 4 7.56 4c.98-1.117 2.503-2 4.494-2s3.513.883 4.493 2c0 0 .118 2.777-.657 4.27-1.748 3.365-1.781 5.732-1.781 6.73"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 15H8l-1 3h10zM19 18H5l-1 4h16z"
      />
    </svg>
  );
};
export default Stamp_02;
