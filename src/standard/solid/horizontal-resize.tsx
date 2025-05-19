import React from "react";
const HorizontalResize: React.FC<
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
        d="M10 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M14 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M7.626 8.22a1 1 0 0 1 .323 1.096L7.054 12l.895 2.684a1 1 0 0 1-1.463 1.174l-5-3a1 1 0 0 1 0-1.716l5-3a1 1 0 0 1 1.14.078M16.374 8.22a1 1 0 0 1 1.14-.077l5 3a1 1 0 0 1 0 1.714l-5 3a1 1 0 0 1-1.463-1.173L16.946 12l-.895-2.684a1 1 0 0 1 .323-1.096"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M13 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HorizontalResize;
