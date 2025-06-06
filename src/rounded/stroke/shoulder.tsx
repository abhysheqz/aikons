import React from "react";
const Shoulder: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17 7 2 .5M8 17.5s-3-1.5-3-5 2.5-5 7-6.5c3-1 5-2 5-4M6 16s-.5 1.385-.5 3.23C5.5 20.616 6 22 6 22M12 15l.813 1.219A4 4 0 0 0 16.14 18H19M18 15v.01M13 16.5V22"
      />
    </svg>
  );
};
export default Shoulder;
