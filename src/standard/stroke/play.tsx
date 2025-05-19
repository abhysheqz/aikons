import React from "react";
const Play: React.FC<
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
        d="M7.524 19.062A1 1 0 0 1 6 18.21V5.79a1 1 0 0 1 1.524-.852l10.092 6.21a1 1 0 0 1 0 1.704z"
      />
    </svg>
  );
};
export default Play;
