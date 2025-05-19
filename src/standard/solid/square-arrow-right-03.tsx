import React from "react";
const SquareArrowRight_03: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm12.5 15a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-1.5 0v8c0 .414.336.75.75.75m-6.03-7.78a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H7a.75.75 0 0 1 0-1.5h5.19l-1.22-1.22a.75.75 0 0 1 0-1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowRight_03;
