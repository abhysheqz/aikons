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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m17 7 2 .5M8 17.5s-1.034-.517-1.888-1.653M17 2c0 2-2 3-5 4-4.5 1.5-7 3-7 6.5 0 1.445.511 2.549 1.112 3.347m0 0S5.5 17.385 5.5 19.231V22M18 15v.01M12 15l.813 1.219q.088.134.187.258M19 18h-2.86A4 4 0 0 1 13 16.477M13 22v-5.523"
      />
    </svg>
  );
};
export default Shoulder;
