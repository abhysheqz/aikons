import React from "react";
const IceCubes: React.FC<
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
        d="M2.5 14.999a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zM12.787 16.195a.98.98 0 0 1 0-1.388l3.52-3.518a.98.98 0 0 1 1.387 0l3.519 3.518a.98.98 0 0 1 0 1.388l-3.52 3.519a.98.98 0 0 1-1.387 0zM7.708 3.664c.19-.523.769-.792 1.291-.602l4.755 1.73c.522.19.792.769.602 1.292l-1.73 4.754c-.191.523-.77.792-1.292.602L6.58 9.71a1.007 1.007 0 0 1-.602-1.292z"
      />
    </svg>
  );
};
export default IceCubes;
