import React from "react";
const Warehouse: React.FC<
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
        d="M5.25 22.25V10.289h13.5V22.25h3.5V6.053L12 1.751 1.75 6.053v16.198zm8.5-15v-1.5h-3.5v1.5z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M8.25 14.75h7.5v7.5h-7.5z" />
    </svg>
  );
};
export default Warehouse;
