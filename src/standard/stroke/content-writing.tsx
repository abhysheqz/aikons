import React from "react";
const ContentWriting: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 10V4.5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6M2 8.5h19M13 19.027l6.237-6.237a.99.99 0 0 1 1.399 0l1.074 1.074a.99.99 0 0 1 0 1.4L15.473 21.5H13z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.5 5.5h.01m3.98 0h.01"
      />
    </svg>
  );
};
export default ContentWriting;
