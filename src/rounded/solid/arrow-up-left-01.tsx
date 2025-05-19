import React from "react";
const ArrowUpLeft_01: React.FC<
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
        d="M6.293 6.293a1 1 0 0 0 0 1.414l11 11a1 1 0 0 0 1.414-1.414l-11-11a1 1 0 0 0-1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.756 5.29c-.281.082-.662.225-.952.514s-.432.671-.514.952c-.09.31-.15.661-.192 1.014-.083.709-.103 1.54-.097 2.314a43 43 0 0 0 .134 2.998v.001a1 1 0 0 0 1.993-.167l-.018-.232A43 43 0 0 1 7 10.069c-.005-.742.016-1.479.085-2.067.034-.295.103-.605.15-.766.162-.048.472-.117.767-.151.588-.069 1.325-.09 2.066-.084a41 41 0 0 1 2.848.127 1 1 0 0 0 .168-1.993h-.002l-.253-.02a45 45 0 0 0-2.745-.114c-.773-.006-1.605.015-2.314.097a6.3 6.3 0 0 0-1.014.192"
      />
    </svg>
  );
};
export default ArrowUpLeft_01;
