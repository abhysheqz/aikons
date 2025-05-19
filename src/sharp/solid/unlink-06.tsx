import React from "react";
const Unlink_06: React.FC<
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
        d="M9.5 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-6h2v5h5V4h-5v2h-2zm-4 5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6h-2V9h-5v11h5v-2h2v3a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1zM22.503 9.8l-2 1.5-1.2-1.6 2-1.5zm-1.2 7-2-1.5 1.2-1.6 2 1.5zM1.497 9.8l2 1.5 1.2-1.6-2-1.5zm1.2 7 2-1.5-1.2-1.6-2 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Unlink_06;
