import React from "react";
const RadioactiveAlert: React.FC<
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
        d="M15.98 6.977a3.92 3.92 0 0 0-1.593-3.152l1.195-1.575a5.88 5.88 0 0 1 2.388 4.727 5.84 5.84 0 0 1-.8 2.958 5.98 5.98 0 0 1 4.58 2.36l-1.591 1.183a3.99 3.99 0 0 0-3.184-1.577c-2.198 0-3.98 1.764-3.98 3.94s1.782 3.94 3.98 3.94a3.99 3.99 0 0 0 3.184-1.577l1.591 1.183a5.98 5.98 0 0 1-4.776 2.363A5.98 5.98 0 0 1 12 19.108a5.98 5.98 0 0 1-4.975 2.642 5.98 5.98 0 0 1-4.775-2.363l1.59-1.183a3.99 3.99 0 0 0 3.185 1.576c2.198 0 3.98-1.764 3.98-3.94 0-2.175-1.782-3.939-3.98-3.939a3.99 3.99 0 0 0-3.184 1.577L2.25 12.295a5.98 5.98 0 0 1 4.58-2.36c-.508-.87-.8-1.88-.8-2.958 0-1.934.94-3.65 2.388-4.727l1.195 1.575A3.92 3.92 0 0 0 8.02 6.977c0 2.176 1.782 3.94 3.98 3.94s3.98-1.764 3.98-3.94"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RadioactiveAlert;
