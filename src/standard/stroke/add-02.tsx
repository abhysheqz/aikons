import React from "react";
const Add_02: React.FC<
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
        d="M10.018 10.017 3 10v4l7.018-.003L10 21h4l-.002-7.003L21 14v-4l-7.002.017L14 3h-4z"
      />
    </svg>
  );
};
export default Add_02;
