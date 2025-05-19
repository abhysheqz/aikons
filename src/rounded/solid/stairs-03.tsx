import React from "react";
const Stairs_03: React.FC<
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
        d="M7 1a1 1 0 0 1 1 1v1h8V2a1 1 0 1 1 2 0v20a1 1 0 1 1-2 0v-1H8v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m1 18h8v-2H8zm8-6v2H8v-2zm-8-2h8V9H8zm8-6v2H8V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Stairs_03;
