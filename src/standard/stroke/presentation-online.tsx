import React from "react";
const PresentationOnline: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 10.5c1.838-2.595 6.119-2.737 8 0m-2-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 21.5h18M11 16.5h2m-6.71 3.596-1.2-4c-.388-1.287.537-2.596 1.834-2.596h10.152c1.297 0 2.222 1.309 1.835 2.596l-1.201 4c-.251.835-.995 1.404-1.836 1.404H8.126c-.84 0-1.584-.569-1.835-1.404"
      />
    </svg>
  );
};
export default PresentationOnline;
