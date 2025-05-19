import React from "react";
const TvSmart: React.FC<
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
        d="M22 2.5H2v16h20z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.9 15a1.6 1.6 0 0 1 1.6-1.6M13.7 15a4.8 4.8 0 0 1 4.8-4.8m-8 4.8a8 8 0 0 1 8-8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 18.5 1 3m-13-3-1 3"
      />
    </svg>
  );
};
export default TvSmart;
