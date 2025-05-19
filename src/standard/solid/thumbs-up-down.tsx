import React from "react";
const ThumbsUpDown: React.FC<
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
        d="M1 11.75c0 .966.784 1.75 1.75 1.75h6.313a1.75 1.75 0 0 0 1.634-1.122l1.73-4.5A1.75 1.75 0 0 0 10.794 5.5H7.996a3.75 3.75 0 0 0-.872-3.937L6.78 1.22a.75.75 0 0 0-1.087.028L1.449 5.963A1.75 1.75 0 0 0 1 7.133zM12.804 11.122A1.75 1.75 0 0 1 14.436 10h6.313c.966 0 1.75.784 1.75 1.75v4.616c0 .433-.16.85-.45 1.171l-4.242 4.715a.75.75 0 0 1-1.088.028l-.896-.896a2.75 2.75 0 0 1-.414-3.359l.015-.025h-2.719a1.75 1.75 0 0 1-1.633-2.378z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThumbsUpDown;
