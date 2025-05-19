import React from "react";
const SummationCircle: React.FC<
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
        strokeWidth={1.5}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 10.008V8H9.005c-.004 0-.006.005-.003.007l3.51 3.986-3.51 3.99q-.004.007.002.008L15 16v-1.99"
      />
    </svg>
  );
};
export default SummationCircle;
