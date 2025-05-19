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
        d="M4.276 22v-3.55c0-1.278-.341-1.933-1.011-3.039A8.7 8.7 0 0 1 2 10.89C2 5.979 6.076 2 11.103 2c4.364 0 8.01 2.998 8.897 7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.069 14.845 4.957-3.345L22 15l-2.3 5.361A2.71 2.71 0 0 1 17.212 22c-.47 0-.93-.117-1.328-.368-3.842-2.42-10.482-8.517-8.534-11.144.777-1.047 2.762-.753 7.719 4.357Zm0 0-1.067 5.234"
      />
    </svg>
  );
};
export default ProtectionMask;
