import React from "react";
const Mouse_10: React.FC<
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
        d="M9.75 7a1.75 1.75 0 0 1 1.5-1.732V1.273c-2.808.179-4.71 1.374-5.887 3.273C4.125 6.54 3.75 9.216 3.75 12c0 2.785.375 5.459 1.613 7.454C6.643 21.518 8.777 22.75 12 22.75s5.357-1.232 6.637-3.296c1.238-1.995 1.613-4.67 1.613-7.454 0-2.785-.375-5.459-1.613-7.454-1.178-1.9-3.08-3.094-5.887-3.273v3.995c.848.121 1.5.85 1.5 1.732v2a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 9.75 9z"
      />
      <path
        fill="currentColor"
        d="M11.25 7a.25.25 0 0 1 .25-.25h1a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25z"
      />
    </svg>
  );
};
export default Mouse_10;
