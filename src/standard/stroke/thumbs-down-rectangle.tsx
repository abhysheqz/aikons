import React from "react";
const ThumbsDownRectangle: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 2.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.113 6.5H8a1 1 0 0 0-1 1v4.65a1 1 0 0 0 .22.624L11 17.5l.114-.085a3 3 0 0 0 .957-3.582L11.5 12.5h4.071a1 1 0 0 0 .94-1.342l-1.459-4a1 1 0 0 0-.94-.658Z"
      />
    </svg>
  );
};
export default ThumbsDownRectangle;
