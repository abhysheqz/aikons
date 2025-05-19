import React from "react";
const ArrowDown_05: React.FC<
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
        d="M18 20.5H6v-2h12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 10.55V3.5h2v7.05h4.5L12 16.5l-5.5-5.95z"
      />
    </svg>
  );
};
export default ArrowDown_05;
