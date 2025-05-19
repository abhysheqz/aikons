import React from "react";
const Bread_02: React.FC<
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
        d="M7 6.25c-1.781 0-3.246.901-4.24 2.32-.982 1.404-1.51 3.314-1.51 5.43v3.75h7V14.9c0-1.34-.193-2.463-.496-3.222-.33-.823-.651-.928-.754-.928s-.424.105-.754.928c-.303.759-.496 1.881-.496 3.222h-1.5c0-1.46.207-2.787.604-3.779C5.224 10.195 5.903 9.25 7 9.25s1.776.944 2.146 1.871c.397.992.604 2.32.604 3.779v2.85h3V14c0-2.116-.528-4.026-1.51-5.43C10.245 7.15 8.78 6.25 7 6.25"
      />
      <path
        fill="currentColor"
        d="M14.25 17.75h8.5V14c0-2.116-.528-4.026-1.51-5.43C20.246 7.15 18.78 6.25 17 6.25h-5.867c.506.42.953.913 1.335 1.46 1.199 1.712 1.782 3.943 1.782 6.29z"
      />
    </svg>
  );
};
export default Bread_02;
