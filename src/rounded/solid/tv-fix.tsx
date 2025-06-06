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
        d="M15.293 1.543a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L12 4.836z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.944 5.75h4.112c1.838 0 3.294 0 4.433.149 1.172.153 2.121.475 2.87 1.202.748.727 1.08 1.65 1.238 2.788.153 1.107.153 2.52.153 4.306v.11c0 1.785 0 3.199-.153 4.306-.158 1.139-.49 2.06-1.238 2.787-.749.727-1.698 1.05-2.87 1.203-1.14.149-2.595.149-4.433.149H9.944c-1.838 0-3.294 0-4.433-.149-1.172-.153-2.121-.476-2.87-1.203-.748-.726-1.08-1.648-1.238-2.787-.153-1.107-.153-2.521-.153-4.306v-.11c0-1.785 0-3.2.153-4.306.158-1.139.49-2.06 1.238-2.788.749-.727 1.698-1.05 2.87-1.202 1.14-.15 2.595-.15 4.433-.15m4.096 3.793a1 1 0 0 1 0 1.414.885.885 0 1 0 1.253 1.253 1 1 0 1 1 1.414 1.414 2.89 2.89 0 0 1-3.248.58l-1.504 1.505a2.89 2.89 0 0 1-.581 3.248 1 1 0 1 1-1.414-1.414.886.886 0 0 0-1.253-1.253 1 1 0 1 1-1.414-1.414 2.89 2.89 0 0 1 3.248-.581l1.504-1.504a2.89 2.89 0 0 1 .581-3.248 1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TvFix;
