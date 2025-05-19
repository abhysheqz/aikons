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
        fill="currentColor"
        fillRule="evenodd"
        d="M5 5.375a3.75 3.75 0 0 0-3.75 3.75v10A3.75 3.75 0 0 0 5 22.875h14a3.75 3.75 0 0 0 3.75-3.75v-10A3.75 3.75 0 0 0 19 5.375zm9.04 5.457a1 1 0 1 0-1.414-1.414 2.89 2.89 0 0 0-.581 3.248l-1.504 1.504a2.89 2.89 0 0 0-3.248.581 1 1 0 0 0 1.414 1.414.886.886 0 1 1 1.253 1.253 1 1 0 1 0 1.414 1.414 2.89 2.89 0 0 0 .581-3.248l1.504-1.504c1.066.49 2.37.297 3.248-.581a1 1 0 0 0-1.414-1.414.885.885 0 0 1-1.252-1.253"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.293 1.418a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L12 4.71z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TvFix;
