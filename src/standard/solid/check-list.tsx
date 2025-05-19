import React from "react";
const CheckList: React.FC<
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
        d="M10 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M10 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M10 18a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M9.125 3.22a1 1 0 0 1 .156 1.405l-4 5a1 1 0 0 1-1.488.082l-1.5-1.5a1 1 0 0 1 1.414-1.414l.71.71L7.72 3.375a1 1 0 0 1 1.406-.156M9.125 14.22a1 1 0 0 1 .156 1.405l-4 5a1 1 0 0 1-1.488.082l-1.5-1.5a1 1 0 1 1 1.414-1.414l.71.71 3.302-4.128a1 1 0 0 1 1.406-.156"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckList;
