import React from "react";
const ProtectionMask: React.FC<
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
        d="m15.069 14.845 4.957-3.345L22 15l-2.3 5.361A2.71 2.71 0 0 1 17.212 22c-.47 0-.93-.117-1.328-.368-3.842-2.42-10.482-8.517-8.534-11.144.777-1.047 2.762-.753 7.719 4.357Zm0 0-1.067 5.234"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 9c-.91-4.008-4.717-7-9-7a9 9 0 0 0-9 9c0 2.017.664 4.183 1.784 5.72.135.184.216.405.216.634V22"
      />
    </svg>
  );
};
export default ProtectionMask;
