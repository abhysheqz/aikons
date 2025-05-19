import React from "react";
const LocationOffline_02: React.FC<
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
        d="M5.312 3.906A9.72 9.72 0 0 0 2.25 11c0 3.836 2.46 6.777 4.77 8.701a22.8 22.8 0 0 0 4.258 2.784c.125.063.335.162.411.198l.006.002a.75.75 0 0 0 .61 0l.003-.001.112-.052q.108-.05.302-.147a22.78 22.78 0 0 0 4.258-2.784 17 17 0 0 0 2.083-2.043zM19.98 16.454c1.04-1.54 1.77-3.364 1.77-5.454 0-5.385-4.365-9.75-9.75-9.75-2.047 0-3.946.63-5.515 1.708z"
      />
    </svg>
  );
};
export default LocationOffline_02;
