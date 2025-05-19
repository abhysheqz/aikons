import React from "react";
const LocationCheck_01: React.FC<
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
        d="m11.69 22.683.005.002a.75.75 0 0 0 .61 0l.003-.001.112-.052q.108-.05.302-.147a22.78 22.78 0 0 0 4.258-2.784c2.31-1.924 4.77-4.865 4.77-8.701 0-5.385-4.365-9.75-9.75-9.75S2.25 5.615 2.25 11c0 3.836 2.46 6.777 4.77 8.701a22.8 22.8 0 0 0 4.258 2.784c.125.063.335.162.411.198M16.267 8.64a1 1 0 1 0-1.536-1.28l-4.3 5.159-1.225-1.226a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.475-.067z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationCheck_01;
