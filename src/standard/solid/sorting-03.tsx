import React from "react";
const Sorting_03: React.FC<
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
        d="M10.5 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M17.5 13h-5a1 1 0 1 1 0-2h5a1 1 0 1 1 0 2M13.5 16a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M9.5 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1M6 3a1 1 0 0 1 1 1v13.5h1.5a1 1 0 0 1 .707 1.707l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5A1 1 0 0 1 3.5 17.5H5V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sorting_03;
