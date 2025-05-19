import React from "react";
const TvFix: React.FC<
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
        d="M22 6H2v16h20z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.333 12.667-2.666 2.666m2.666-2.667c.737.737 1.93.737 2.667 0m-2.667 0a1.886 1.886 0 0 1 0-2.666m-2.666 5.333c.736.737.736 1.93 0 2.667m0-2.667a1.886 1.886 0 0 0-2.667 0M9 3l3 3 4-4"
      />
    </svg>
  );
};
export default TvFix;
