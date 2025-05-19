import React from "react";
const ResizeFieldRectangle: React.FC<
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
        d="M5 2.25A2.75 2.75 0 0 0 2.25 5v14A2.75 2.75 0 0 0 5 21.75h14A2.75 2.75 0 0 0 21.75 19V5A2.75 2.75 0 0 0 19 2.25zm13.53 7.28a.75.75 0 0 0-1.06-1.06l-9 9a.75.75 0 1 0 1.06 1.06zm0 4a.75.75 0 0 0-1.06-1.06l-5 5a.75.75 0 0 0 1.06 1.06zm0 4a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ResizeFieldRectangle;
