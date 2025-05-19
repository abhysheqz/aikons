import React from "react";
const MediumSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM8.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M15 12c0 1.38-.672 2.5-1.5 2.5S12 13.38 12 12s.672-2.5 1.5-2.5S15 10.62 15 12m2 2.5c.552 0 1-1.12 1-2.5s-.448-2.5-1-2.5-1 1.12-1 2.5.448 2.5 1 2.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MediumSquare;
