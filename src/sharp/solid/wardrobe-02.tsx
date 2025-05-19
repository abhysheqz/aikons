import React from "react";
const Wardrobe_02: React.FC<
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
        d="M5 22.25v-3h2v3zm12 0v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 20.25V1.75H3a.75.75 0 0 0-.75.75v17c0 .414.336.75.75.75zm1.5-18.5H21a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-.75.75h-8.25zM8.25 12.5v-3h1.5v3zm6-3v3h1.5v-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wardrobe_02;
