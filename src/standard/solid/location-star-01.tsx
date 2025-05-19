import React from "react";
const LocationStar_01: React.FC<
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
        d="m11.69 22.683.005.002a.75.75 0 0 0 .61 0l.003-.001.112-.052q.108-.05.302-.147a22.78 22.78 0 0 0 4.258-2.784c2.31-1.924 4.77-4.865 4.77-8.701 0-5.385-4.365-9.75-9.75-9.75S2.25 5.615 2.25 11c0 3.836 2.46 6.777 4.77 8.701a22.8 22.8 0 0 0 4.258 2.784c.125.063.335.162.411.198m.689-15.456a.43.43 0 0 0-.758 0l-.93 1.787a.42.42 0 0 1-.311.222l-2.021.315a.414.414 0 0 0-.234.705l1.446 1.42a.41.41 0 0 1 .12.36l-.32 1.982c-.054.336.304.59.613.436l1.823-.91a.43.43 0 0 1 .386 0l1.823.91c.31.154.667-.1.613-.436l-.32-1.983a.41.41 0 0 1 .12-.358l1.447-1.42a.414.414 0 0 0-.235-.706l-2.02-.315a.42.42 0 0 1-.312-.222z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationStar_01;
