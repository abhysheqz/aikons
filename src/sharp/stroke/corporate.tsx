import React from "react";
const Corporate: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2H2v20h10zM12 8h10v14H12z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 16h-4m4-4h-4M9 14H5m4-4H5m4-4H5"
      />
    </svg>
  );
};
export default Corporate;
