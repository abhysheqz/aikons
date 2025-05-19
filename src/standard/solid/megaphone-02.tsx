import React from "react";
const Megaphone_02: React.FC<
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
        d="M8 14v2.882l4 2v-2.24h2v2.24a2 2 0 0 1-2.894 1.789l-4-2A2 2 0 0 1 6 16.882V14zM8.25 8v5.997h-1.5V8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.46 3.344c1.01-.433 2.282-.25 3.03.704C20.732 5.633 21.75 7.83 21.75 11s-1.018 5.367-2.26 6.952c-.748.955-2.02 1.137-3.03.704L7.346 14.75H5A2.75 2.75 0 0 1 2.25 12v-2A2.75 2.75 0 0 1 5 7.25h2.346z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Megaphone_02;
