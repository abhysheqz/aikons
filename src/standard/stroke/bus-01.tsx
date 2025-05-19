import React from "react";
const Bus_01: React.FC<
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
        d="M4.5 6h15M17 20v2M7 20v2M20 17V6.14c0-.416-.128-.822-.416-1.124C18.668 4.056 16.214 2 12 2 7.785 2 5.332 4.055 4.416 5.016 4.128 5.318 4 5.724 4 6.14V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 14c2.413.655 5 1 7.5 1s6.068-.42 8.5-1M2 10.5V9m20 1.5V9M4.5 17.5H6m12 0h1.5m-8.5 0h2"
      />
    </svg>
  );
};
export default Bus_01;
