import React from "react";
const CurvyRightDirection: React.FC<
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
        d="M2 11h4a2 2 0 0 1 2 2v4a2 2 0 1 0 4 0V6.996a1.996 1.996 0 1 1 3.992.008l-.017 3.988a2 2 0 0 0 2 2.008H22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20 15 2-2-2-2"
      />
    </svg>
  );
};
export default CurvyRightDirection;
