import React from "react";
const ArrowUpDown: React.FC<
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
        d="M18 4v13.172l2.586-2.586L22 16l-5 5-5-5 1.414-1.414L16 17.172V4zM7 3l5 5-1.414 1.414L8 6.828V20H6V6.829L3.414 9.414 2 8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowUpDown;
