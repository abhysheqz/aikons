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
        d="M15 3H9c-.943 0-1.414 0-1.707.293S7 4.057 7 5v1a6 6 0 0 0 .79 2.977L9 11v7c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 21 11.068 21 12 21s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 19.398 15 18.932 15 18v-7l1.21-2.023A6 6 0 0 0 17 6V5c0-.943 0-1.414-.293-1.707S15.943 3 15 3M7 6h10M12 13v2"
      />
    </svg>
  );
};
export default Flashlight;
