import React from "react";
const Summation_02: React.FC<
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
        d="M1.5 2h5v2h-3v16h3v2h-5zm21 0v20h-5v-2h3V4h-3V2zM15.708 7.295a1 1 0 0 1 .293.707V10h-2v-.997h-2.796L13.83 12l-2.625 3L14 14.997V14h2v1.998a1 1 0 0 1-1 1L9 17a1 1 0 0 1-.753-1.659l2.924-3.34-2.923-3.337A1 1 0 0 1 9 7.004l6-.002a1 1 0 0 1 .708.293"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Summation_02;
