import React from "react";
const Watch_02: React.FC<
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
        d="M8 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm5 5a1 1 0 1 0-2 0v2.005a1 1 0 0 0 .295.709l1 .995a1 1 0 0 0 1.41-1.418L13 11.59z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.22 3H9.783l-.81 3.243-1.94-.486.81-3.242A2 2 0 0 1 9.782 1h4.439a2 2 0 0 1 1.94 1.515l.81 3.242-1.94.486zM14.22 21H9.783l-.81-3.243-1.94.485.81 3.243A2 2 0 0 0 9.782 23h4.439a2 2 0 0 0 1.94-1.515l.81-3.242-1.94-.486z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Watch_02;
