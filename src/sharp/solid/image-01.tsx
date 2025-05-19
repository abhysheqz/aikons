import React from "react";
const Image_01: React.FC<
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
        d="M3 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm3.5 6.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M20 20H7.232l7.837-7.053L20 16.235z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Image_01;
