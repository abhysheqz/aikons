import React from "react";
const Segment: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11 14 7 3H6L2 14m2-4h5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 19a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h2m-6 0H8m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m0 0H2M15 8.5V3h3.25a2.75 2.75 0 1 1 0 5.5zm0 0h4.25a2.75 2.75 0 1 1 0 5.5H15z"
      />
    </svg>
  );
};
export default Segment;
