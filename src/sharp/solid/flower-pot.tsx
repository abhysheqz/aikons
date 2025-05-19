import React from "react";
const FlowerPot: React.FC<
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
        d="M11.25 15.015V9.72a4.26 4.26 0 0 1-2.777-1.604c-.82-1.041-1.223-2.468-1.223-4.08v-.75H8c.455 0 .955.024 1.454.126.085-.172.207-.39.374-.623.372-.52.99-1.145 1.935-1.46L12 1.25l.238.079c.946.315 1.563.94 1.935 1.46.167.233.29.451.374.623A7.2 7.2 0 0 1 16 3.287h.75v.748c0 1.613-.403 3.04-1.223 4.081A4.26 4.26 0 0 1 12.75 9.72v1.237a3.9 3.9 0 0 1 2.25-.683v1.497c-1.28 0-2.005.879-2.25 1.396v1.848zm-.202-11.356a3 3 0 0 0-.198.317q.21.14.406.318.434.394.743.957.31-.562.744-.957a3.4 3.4 0 0 1 .407-.319 3 3 0 0 0-.198-.316A2.5 2.5 0 0 0 12 2.844c-.428.2-.737.515-.952.815"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.401 14.564A.75.75 0 0 1 7 14.266h10a.75.75 0 0 1 .721.954l-2.155 7.53H8.434L6.28 15.22a.75.75 0 0 1 .122-.656"
      />
    </svg>
  );
};
export default FlowerPot;
