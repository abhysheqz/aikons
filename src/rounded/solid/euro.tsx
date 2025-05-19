import React from "react";
const Euro: React.FC<
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
        d="M6.058 9c.456-3.889 3.535-7 7.403-7 2.755 0 5.127 1.594 6.413 3.906a1 1 0 1 1-1.748.972C17.151 5.125 15.408 4 13.461 4c-2.645 0-4.949 2.11-5.386 5H13a1 1 0 1 1 0 2H8v2h5a1 1 0 1 1 0 2H8.075c.437 2.89 2.74 5 5.387 5 1.946 0 3.689-1.125 4.664-2.878a1 1 0 1 1 1.748.972C18.588 20.406 16.216 22 13.462 22c-3.869 0-6.948-3.111-7.404-7H5a1 1 0 1 1 0-2h1v-2H5a1 1 0 1 1 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Euro;
