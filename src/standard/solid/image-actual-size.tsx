import React from "react";
const ImageActualSize: React.FC<
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
        d="M13.5 3a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15M4 10.5a9.5 9.5 0 1 1 9.5 9.5 9.46 9.46 0 0 1-5.973-2.113l-4.82 4.82a1 1 0 0 1-1.414-1.414l4.82-4.82A9.46 9.46 0 0 1 4 10.5M11 8a1 1 0 0 0-1.447-.894l-1 .5A1 1 0 0 0 9 9.5V13a1 1 0 1 0 2 0zm7.026-.85A1 1 0 0 1 18.5 8v5a1 1 0 1 1-2 0V9.5a1 1 0 0 1-.447-1.894l1-.5a1 1 0 0 1 .973.043M14.5 9a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0zm0 3a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageActualSize;
