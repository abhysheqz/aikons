import React from "react";
const Yelp: React.FC<
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
        d="M11.858 3.491a1 1 0 0 0-1.29-1.05L6.911 3.566a1 1 0 0 0-.485 1.583L11.141 11zM18.31 12.14a1 1 0 0 0 .75-1.55l-1.183-1.775a1 1 0 0 0-1.69.04L14 12.5zM15.802 18.964a1 1 0 0 0 1.71.186l1.105-1.473a1 1 0 0 0-.537-1.564L14 15zM8.21 18.925a1 1 0 0 0 .292 1.676l1.995.798a1 1 0 0 0 1.368-1.012L11.5 16zM5.896 11.388a1 1 0 0 0-1.533.761l-.226 2.713a1 1 0 0 0 1.38 1.006L10 14z"
      />
    </svg>
  );
};
export default Yelp;
