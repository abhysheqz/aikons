import React from "react";
const FlipVertical: React.FC<
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
        d="m15.87 20.419-3.056-4.28a1 1 0 0 0-1.628 0L8.13 20.42A1 1 0 0 0 8.943 22h6.114a1 1 0 0 0 .813-1.581M15.057 2a1 1 0 0 1 .813 1.581l-3.056 4.28a1 1 0 0 1-1.628 0L8.13 3.58A1 1 0 0 1 8.943 2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 12h4m3.5 0H21M3 12h3.5"
      />
    </svg>
  );
};
export default FlipVertical;
