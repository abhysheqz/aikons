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
        d="M1.582 2.377a.75.75 0 0 1 .702-.071c6.34 2.592 13.092 2.592 19.432 0A.75.75 0 0 1 22.75 3v11.041l-6.316-3.969-13.187 11.25q-.483.176-.963.372A.75.75 0 0 1 1.25 21V3a.75.75 0 0 1 .332-.623m14.987 9.552 6.181 3.884V21a.75.75 0 0 1-1.034.694c-4.872-1.992-9.988-2.453-14.973-1.383zM7.5 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageComposition;
