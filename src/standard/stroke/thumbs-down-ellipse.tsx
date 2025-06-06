import React from "react";
const ThumbsDownEllipse: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.113 7.5H9a1 1 0 0 0-1 1v4.65a1 1 0 0 0 .22.624L12 18.5l.114-.085a3 3 0 0 0 .957-3.582L12.5 13.5h4.071a1 1 0 0 0 .94-1.342l-1.459-4a1 1 0 0 0-.94-.658Z"
      />
    </svg>
  );
};
export default ThumbsDownEllipse;
