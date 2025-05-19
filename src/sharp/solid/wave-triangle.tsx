import React from "react";
const WaveTriangle: React.FC<
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
        d="m11 1.5 5.58 9.5H22v2h-6.58L13 9.031V22.5L7.42 13H2v-2h6.58L11 14.969z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WaveTriangle;
