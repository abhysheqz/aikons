import React from "react";
const GibbousMoon: React.FC<
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
        d="M10.126 3.043a.75.75 0 0 1 .067.81 7.357 7.357 0 0 0 9.954 9.954.75.75 0 0 1 1.083.833c-1.022 4.362-4.936 7.61-9.61 7.61-5.451 0-9.87-4.419-9.87-9.87 0-4.674 3.248-8.588 7.61-9.61a.75.75 0 0 1 .766.273M21.595 12.494a1 1 0 0 1-1.105-.883 9.14 9.14 0 0 0-8.054-8.054 1 1 0 0 1 .222-1.988 11.14 11.14 0 0 1 9.82 9.82 1 1 0 0 1-.883 1.105"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GibbousMoon;
