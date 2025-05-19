import React from "react";
const Lighthouse: React.FC<
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
        d="M10.02 8c-.695-.933-1.877-2.238-1.416-3.524C8.91 3.621 12 2 12 2s3.09 1.62 3.396 2.476c.461 1.286-.722 2.591-1.416 3.524"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 8h8M9 13h6M8 18h8M9.5 8 7 21.5M14.5 8 17 21.5M5 22h14M19 7.5l2-.5m-2 3.5 2 .5M5 7.5 3 7m2 3.5L3 11"
      />
    </svg>
  );
};
export default Lighthouse;
