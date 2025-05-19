import React from "react";
const Flashlight: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 3H8a1 1 0 0 0-1 1v2a6 6 0 0 0 .79 2.977L9 11v9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-9l1.21-2.023A6 6 0 0 0 17 6V4a1 1 0 0 0-1-1M7 6h10M12 13v2"
      />
    </svg>
  );
};
export default Flashlight;
