import React from "react";
const Upload_04: React.FC<
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
        strokeWidth={1.5}
        d="M12 14.5V4.84M9 7.5l3-3 3 3M20 16.5l-1 3H5l-1-3"
      />
    </svg>
  );
};
export default Upload_04;
