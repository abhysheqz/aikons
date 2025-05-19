import React from "react";
const ArrowShrink_02: React.FC<
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
        d="M8.085 14.5 2 20.585 3.414 22 9.5 15.914V20.5h2v-8h-8v2zM15.914 9.5 22 3.414 20.586 2 14.5 8.085V3.5h-2v8h8v-2z"
      />
    </svg>
  );
};
export default ArrowShrink_02;
