import React from "react";
const PackageOutOfStock: React.FC<
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
        d="M5.705 7.152 7 6.577a1 1 0 0 0-.812-1.828l-3.35 1.49a1 1 0 0 0-.584 1.056v10.83a.75.75 0 0 0 .446.686l8.996 4a.75.75 0 0 0 .609 0l9.004-4a.75.75 0 0 0 .445-.686V7.222q.003-.034.003-.07a1 1 0 0 0-.594-.914l-3.35-1.489A1 1 0 1 0 17 6.577l1.294.575-6.295 2.798zM5.33 11.79a.75.75 0 0 1 1.006-.336l2 1a.75.75 0 1 1-.67 1.342l-2-1a.75.75 0 0 1-.336-1.006"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.292 1.418a1 1 0 0 1 1.415 0l1.292 1.293 1.293-1.293a1 1 0 1 1 1.415 1.414l-1.293 1.293 1.293 1.293a1 1 0 0 1-1.415 1.414L12 5.54l-1.292 1.293a1 1 0 1 1-1.415-1.414l1.293-1.293-1.293-1.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageOutOfStock;
