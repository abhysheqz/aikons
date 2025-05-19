import React from "react";
const KnifeBread: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m5.646 20.204 3.023-3.636 1.258-1.563 2.066 1.54q.03.022.056.05l.386.389 3.01-2.759.364-2.056 1.911-.415.372-2.046 1.893-.404.578-2.058 1.864-.74c-.174-.82-.602-1.694-.855-2.053-2.15-2.345-4.735-1.375-5.795-.418L2.95 17.92c-.71.73-.674 1.765 0 2.529.772.872 1.941.642 2.696-.245Z"
      />
    </svg>
  );
};
export default KnifeBread;
