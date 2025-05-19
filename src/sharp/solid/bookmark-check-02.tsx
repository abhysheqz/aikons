import React from "react";
const BookmarkCheck_02: React.FC<
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
        d="M4.001 1.125a.75.75 0 0 0-.75.75v20.75l8.75-4.375 8.75 4.375V1.875a.75.75 0 0 0-.75-.75zm6.7 11.958 5.817-5.54-1.034-1.086-4.684 4.46-1.235-1.41-1.128.987z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BookmarkCheck_02;
