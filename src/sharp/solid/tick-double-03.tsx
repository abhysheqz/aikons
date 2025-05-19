import React from "react";
const TickDouble_03: React.FC<
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
        d="M18.987 4.75a.75.75 0 0 1 .543.22l3 3a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.032.027l-5-4.5a.75.75 0 0 1-.074-1.037l2.5-3a.75.75 0 0 1 1.045-.106l1.957 1.566 6.526-6.992a.75.75 0 0 1 .535-.238"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.475 4.75a.75.75 0 0 1 .555.22l2 2-1.06 1.06-1.434-1.433-2.972 3.397-1.128-.988 3.5-4a.75.75 0 0 1 .54-.256M3.924 10.52a.75.75 0 0 1 1.056-.096l1.5 1.25-.96 1.152-.924-.77-1.558 1.87 3.935 3.54.497-.496 1.06 1.06-1 1a.75.75 0 0 1-1.032.027l-5-4.5a.75.75 0 0 1-.074-1.037z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TickDouble_03;
