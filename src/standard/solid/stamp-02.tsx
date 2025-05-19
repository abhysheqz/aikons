import React from "react";
const Stamp_02: React.FC<
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
        d="M6.595 16.051A3 3 0 0 1 9.44 14h5.117a3 3 0 0 1 2.846 2.051l.544 1.633-1.897.632-.544-1.632a1 1 0 0 0-.95-.684H9.442a1 1 0 0 0-.949.684l-.544 1.632-1.897-.632z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.895 19.333a2.75 2.75 0 0 1 2.667-2.083H17.44a2.75 2.75 0 0 1 2.668 2.083l.466 1.864a1.25 1.25 0 0 1-1.213 1.553H4.641a1.25 1.25 0 0 1-1.212-1.553z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.96 3.487C8 2.379 9.74 1.25 12 1.25s4 1.13 5.04 2.237a.75.75 0 0 1 .203.481v.012l.001.027a11 11 0 0 1 .006.453c-.001.297-.011.71-.047 1.172-.068.895-.24 2.093-.701 2.983-1.674 3.223-1.697 5.46-1.697 6.385a.75.75 0 0 1-.75.75h-4.11a.75.75 0 0 1-.75-.75c0-.926-.023-3.162-1.696-6.385-.463-.89-.634-2.088-.702-2.983a16 16 0 0 1-.041-1.625v-.035l.001-.003a.75.75 0 0 1 .203-.482"
      />
    </svg>
  );
};
export default Stamp_02;
