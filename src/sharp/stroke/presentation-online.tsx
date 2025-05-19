import React from "react";
const PresentationOnline: React.FC<
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
        d="M19 13.5H5L6 21h12zM3 21h18M10.5 16.5h3M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM16 13.5a4 4 0 0 0-8 0"
      />
    </svg>
  );
};
export default PresentationOnline;
