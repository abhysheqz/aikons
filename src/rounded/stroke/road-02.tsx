import React from "react";
const Road_02: React.FC<
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
        d="M20.828 5.172C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172m17.656 0C22 6.343 22 8.229 22 12s0 5.657-1.172 6.828m0-13.656Zm-17.656 0C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828m0-13.656Zm0 13.656C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172m-17.656 0Zm17.656 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 12h-2M18.5 12h-2M7.5 12h-2"
      />
    </svg>
  );
};
export default Road_02;
