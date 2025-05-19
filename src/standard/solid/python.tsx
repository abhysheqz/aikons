import React from "react";
const Python: React.FC<
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
        d="M9.499 2.25A1.75 1.75 0 0 0 7.749 4v2.75H12a.5.5 0 0 1 0 1H3.998a1.75 1.75 0 0 0-1.75 1.75v5c0 .966.784 1.75 1.75 1.75H6.75V12a.5.5 0 0 1 .5-.5h9V7.75h-.001V4a1.75 1.75 0 0 0-1.75-1.75zm7.751 5.5V12a.5.5 0 0 1-.5.5h-9v4l-.001.034V20c0 .966.783 1.75 1.75 1.75h5a1.75 1.75 0 0 0 1.75-1.75v-2.75H12a.5.5 0 0 1 0-1h7.998a1.75 1.75 0 0 0 1.75-1.75v-5a1.75 1.75 0 0 0-1.75-1.75zm-7-4a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75m4.25 15.74a.75.75 0 0 0-1.5 0v.01a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Python;
