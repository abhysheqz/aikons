import React from "react";
const WifiError_02: React.FC<
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
        d="M8 17c.423-.423.972-.756 1.5-1m6.5 1c-.423-.423-.972-.756-1.5-1M18.5 14c-.89-.774-1.683-1.558-2.5-2M5.5 14c.832-.832 1.668-1.572 2.5-2M2 11c1.343-1.343 3.49-2.875 5-3.5M22 11c-1.343-1.343-3.49-2.875-5-3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20h.012"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17 9.283 5.225A1 1 0 0 1 10.257 4h3.486a1 1 0 0 1 .974 1.225z"
      />
    </svg>
  );
};
export default WifiError_02;
