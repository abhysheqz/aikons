import React from "react";
const NoteDone: React.FC<
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
        d="M6 1a1 1 0 0 1 1 1v2.5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M22.14 14.232a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.726 1.726 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 5.5A2.75 2.75 0 0 1 4.5 2.75h13a2.75 2.75 0 0 1 2.75 2.75v7.334a2.5 2.5 0 0 0-.67.566l-3.248 3.897-.564-.565a2.5 2.5 0 0 0-3.536 3.536l2.483 2.482H4.5A2.75 2.75 0 0 1 1.75 20zM7.5 9.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NoteDone;
