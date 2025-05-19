import React from "react";
const SquareLockMinus_02: React.FC<
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
        d="M18.998 17.999h-4m6 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.993 12.026V9.022H15.49M11 21.998H3.002V9.022h3.47m9.019 0v-2.7c-.177-3.1-2.666-4.225-4.283-4.316C9.333 1.9 6.603 3.3 6.514 6.3l-.042 2.721m9.019 0H6.472"
      />
    </svg>
  );
};
export default SquareLockMinus_02;
