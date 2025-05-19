import React from "react";
const ScrollVertical: React.FC<
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
        d="M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M11.945 1.25a.75.75 0 0 1 .626.33l4.05 6a.75.75 0 0 1-.884 1.122L12 7.301 8.263 8.702a.75.75 0 0 1-.89-1.114l3.95-6a.75.75 0 0 1 .622-.338M16.589 15.536a.75.75 0 0 1 .033.884l-4.051 6a.75.75 0 0 1-1.248-.008l-3.95-6a.75.75 0 0 1 .89-1.114L12 16.699l3.737-1.401a.75.75 0 0 1 .852.238"
      />
    </svg>
  );
};
export default ScrollVertical;
