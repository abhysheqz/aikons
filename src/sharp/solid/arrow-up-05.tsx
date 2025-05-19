import React from "react";
const ArrowUp_05: React.FC<
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
        d="M18 3.5H6v2h12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 13.45v7.05h2v-7.05h4.5L12 7.5l-5.5 5.95z"
      />
    </svg>
  );
};
export default ArrowUp_05;
