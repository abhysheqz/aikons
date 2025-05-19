import React from "react";
const PackageSent: React.FC<
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
        d="M13 7.625V4.832h1.292c.266 0 .544-.097.64-.344a1 1 0 0 0-.225-1.07l-2-2a1 1 0 0 0-1.415 0l-2 2a1 1 0 0 0-.225 1.07c.096.247.374.344.64.344h1.292v2.793a1 1 0 1 0 2 0M7 6.577l-1.295.575L12 9.949l6.295-2.797L17 6.577a1 1 0 1 1 .812-1.828l3.35 1.49a1 1 0 0 1 .591.983v10.903a.75.75 0 0 1-.445.685l-9.004 4a.75.75 0 0 1-.61 0l-8.995-4a.75.75 0 0 1-.446-.685V7.295a1 1 0 0 1 .584-1.057l3.35-1.489A1 1 0 1 1 7 6.577M5.328 11.79a.75.75 0 0 1 1.006-.336l2 1a.75.75 0 0 1-.67 1.342l-2-1a.75.75 0 0 1-.336-1.006"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageSent;
