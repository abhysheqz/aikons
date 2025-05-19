import React from "react";
const Sorting_05: React.FC<
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
        d="M6 13.5a1 1 0 0 1 1 1v3h1.5a1 1 0 0 1 .707 1.707l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5A1 1 0 0 1 3.5 17.5H5v-3a1 1 0 0 1 1-1M6 10.5a1 1 0 0 0 1-1v-3h1.5a1 1 0 0 0 .707-1.707l-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5A1 1 0 0 0 3.5 6.5H5v3a1 1 0 0 0 1 1M18.5 11h-7a1 1 0 1 1 0-2h7a1 1 0 1 1 0 2M10.5 14a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M10.5 18a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M10.5 6a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sorting_05;
