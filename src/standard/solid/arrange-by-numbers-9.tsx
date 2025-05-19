import React from "react";
const ArrangeByNumbers_9: React.FC<
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
        d="M7.472 2.118A1 1 0 0 1 8 3v6h.5a1 1 0 1 1 0 2h-3a1 1 0 0 1 0-2H6V4.866a1 1 0 0 1-1.055-1.698l1.5-1a1 1 0 0 1 1.027-.05M4 14a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h3v-1.5H5a1 1 0 0 1-1-1zm4 2.5V15H6v1.5zM16.5 3a1 1 0 0 1 1 1v12.5H19a1 1 0 0 1 .707 1.707l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5A1 1 0 0 1 14 16.5h1.5V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrangeByNumbers_9;
