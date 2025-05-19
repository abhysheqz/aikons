import React from "react";
const SquareArrowUp_01: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm8.164 7.503a1 1 0 0 0-1.328 0l-4.5 4a1 1 0 0 0 1.328 1.494L12 11.338l3.836 3.41a1 1 0 0 0 1.328-1.495z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowUp_01;
