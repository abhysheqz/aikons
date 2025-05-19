import React from "react";
const Location_01: React.FC<
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
        d="m11.69 22.683.005.002a.75.75 0 0 0 .61 0l.003-.001.112-.052q.108-.05.302-.147a22.78 22.78 0 0 0 4.258-2.784c2.31-1.924 4.77-4.865 4.77-8.701 0-5.385-4.365-9.75-9.75-9.75S2.25 5.615 2.25 11c0 3.836 2.46 6.777 4.77 8.701a22.8 22.8 0 0 0 4.258 2.784c.125.063.335.162.411.198M12 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Location_01;
