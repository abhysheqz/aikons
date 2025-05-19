import React from "react";
const ArrowDownLeft_01: React.FC<
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
        d="M6.293 17.707a1 1 0 0 1 0-1.414l11-11a1 1 0 0 1 1.414 1.414l-11 11a1 1 0 0 1-1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.755 18.71c-.28-.082-.662-.225-.95-.514-.29-.29-.433-.671-.515-.952-.091-.31-.15-.661-.192-1.014-.083-.709-.103-1.54-.097-2.314a43 43 0 0 1 .114-2.745l.02-.253v-.001a1 1 0 0 1 1.993.167l-.018.232A43 43 0 0 0 7 13.931c-.005.742.016 1.479.085 2.067.034.295.103.605.15.766.162.047.471.117.767.151.588.069 1.325.09 2.066.084a41 41 0 0 0 2.616-.11l.231-.017a1 1 0 0 1 .169 1.993h-.002l-.254.02a46 46 0 0 1-2.744.114c-.774.006-1.605-.014-2.314-.097a6.3 6.3 0 0 1-1.015-.192"
      />
    </svg>
  );
};
export default ArrowDownLeft_01;
