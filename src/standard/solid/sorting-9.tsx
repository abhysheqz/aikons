import React from "react";
const Sorting_9: React.FC<
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
        d="M5.793 2.293A1 1 0 0 1 6.5 2H7a1 1 0 0 1 1 1v6h.5a1 1 0 0 1 0 2h-3a1 1 0 1 1 0-2H6V4.866a1 1 0 0 1-1.207-1.573zM4 14a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h3v-1.5H5a1 1 0 0 1-1-1zm4 2.5V15H6v1.5zM17 3a1 1 0 0 1 1 1v12h2a1 1 0 0 1 .707 1.707l-3 3a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 14 16h2V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sorting_9;
