import React from "react";
const ImageComposition: React.FC<
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
        d="M1.582 2.377a.75.75 0 0 1 .702-.071c6.34 2.592 13.092 2.592 19.432 0A.75.75 0 0 1 22.75 3v11.603l-5.021-3.351a2.75 2.75 0 0 0-3.396.27L4.056 21.04q-.891.293-1.772.653A.75.75 0 0 1 1.25 21V3a.75.75 0 0 1 .332-.623M16.896 12.5l5.854 3.908V21a.75.75 0 0 1-1.034.694C16.973 19.754 12 19.266 7.14 20.23l8.212-7.607a1.25 1.25 0 0 1 1.544-.123M7.5 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageComposition;
