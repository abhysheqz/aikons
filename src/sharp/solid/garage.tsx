import React from "react";
const Garage: React.FC<
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
        d="M6.25 13a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .75.75v9.75h4V8a.75.75 0 0 0-.334-.624l-9-6a.75.75 0 0 0-.832 0l-9 6A.75.75 0 0 0 2.25 8v14.75h4zm4.749-5h2.009V6h-2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.75 22.75h8.5v-3h-8.5zM7.75 16.75v1.5h8.5v-1.5zM16.25 15.25h-8.5v-1.5h8.5z"
      />
    </svg>
  );
};
export default Garage;
