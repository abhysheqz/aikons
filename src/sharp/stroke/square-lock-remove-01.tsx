import React from "react";
const SquareLockRemove_01: React.FC<
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
        d="m13.998 21.999 3.5-3.5m0 0 3.5-3.5m-3.5 3.5-3.5-3.5m3.5 3.5 3.5 3.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.002 12.026V9.022h-3.504m-4.492 12.976H3.002V9.022h3.473m9.023 0v-2.7c-.177-3.1-2.667-4.225-4.286-4.316C9.337 1.9 6.606 3.3 6.516 6.3l-.042 2.721m9.024 0H6.475"
      />
    </svg>
  );
};
export default SquareLockRemove_01;
