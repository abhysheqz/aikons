import React from "react";
const MusicNote_04: React.FC<
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
        d="M11.972 17.01a3.994 3.994 0 0 1-3.986 4.004A3.994 3.994 0 0 1 4 17.01a3.994 3.994 0 0 1 3.986-4.003 3.994 3.994 0 0 1 3.986 4.003"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.97 17.054v-6.955m0 0V3.012c4.68.176 7.71 3.377 8.03 6.93.008.092-.104.143-.172.081-2.297-2.088-7.024-1.706-7.858.076Z"
      />
    </svg>
  );
};
export default MusicNote_04;
