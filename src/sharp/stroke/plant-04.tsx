import React from "react";
const Plant_04: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 12v8M12 12v1h3a6 6 0 0 0 6-6V6h-3a6 6 0 0 0-6 6ZM12 10v1H9a6 6 0 0 1-6-6V4h3a6 6 0 0 1 6 6Z"
      />
    </svg>
  );
};
export default Plant_04;
