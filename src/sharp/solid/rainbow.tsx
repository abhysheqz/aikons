import React from "react";
const Rainbow: React.FC<
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
        d="M10.25 17.333c0-1.594 1.11-2.91 2.588-3.299.414-1.613 1.91-2.784 3.662-2.784 1.926 0 3.547 1.42 3.753 3.281 1.418.32 2.497 1.558 2.497 3.069 0 1.761-1.466 3.15-3.225 3.15H13.75c-1.911 0-3.5-1.508-3.5-3.417M10 3.25A8.75 8.75 0 0 0 1.25 12v3c0 .414.336.75.75.75h2.25V12a5.75 5.75 0 0 1 10.89-2.58l1.79-1.789a.75.75 0 0 0 .059-.994A8.91 8.91 0 0 0 10 3.25"
      />
      <path
        fill="currentColor"
        d="M14 10.56A4.252 4.252 0 0 0 5.75 12v3.75H8a.75.75 0 0 0 .75-.75v-3c0-.69.56-1.25 1.25-1.25.61 0 1.142.424 1.274.937a.75.75 0 0 0 1.256.343z"
      />
    </svg>
  );
};
export default Rainbow;
