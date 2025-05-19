import React from "react";
const LocationOffline_01: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.31 3.907A9.72 9.72 0 0 0 2.25 11c0 3.836 2.46 6.777 4.77 8.701a22.8 22.8 0 0 0 4.258 2.784c.125.063.335.162.411.198l.006.002a.75.75 0 0 0 .61 0l.003-.001.112-.052q.108-.05.302-.147a22.78 22.78 0 0 0 4.258-2.784 17 17 0 0 0 2.082-2.042l-4.04-4.04A4 4 0 1 1 9.38 7.977zM15.794 12.27a4 4 0 0 0-5.064-5.064L6.484 2.959A9.7 9.7 0 0 1 12 1.25c5.385 0 9.75 4.365 9.75 9.75 0 2.09-.731 3.916-1.77 5.455z"
      />
    </svg>
  );
};
export default LocationOffline_01;
