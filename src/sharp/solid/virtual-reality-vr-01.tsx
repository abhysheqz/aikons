import React from "react";
const VirtualRealityVr_01: React.FC<
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
        d="M5.667 3.25h12.666l4.417 5.492V20.75h-8.223L12 18.237 9.473 20.75H1.25V8.742zm.94 1.944L4.262 8.111H19.74l-2.346-2.917zM15 14h4v-2h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VirtualRealityVr_01;
