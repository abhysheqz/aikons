import React from "react";
const VolumeMute_01: React.FC<
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
        d="M18 14.814V9.186c0-3.145 0-4.717-.926-5.109-.926-.391-2.016.72-4.195 2.945-1.13 1.152-1.773 1.407-3.379 1.407-1.112 0-2.473-.148-3.163.907C6 9.85 6 10.566 6 12c0 1.433 0 2.15.337 2.664.69 1.055 2.05.907 3.163.907 1.606 0 2.25.255 3.379 1.407 2.18 2.224 3.27 3.336 4.195 2.945.926-.392.926-1.964.926-5.11"
      />
    </svg>
  );
};
export default VolumeMute_01;
