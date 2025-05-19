import React from "react";
const IceCream_01: React.FC<
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
        strokeWidth={1.5}
        d="M13.432 3.5c0 .828-.667 1.5-1.49 1.5-.822 0-1.49-.672-1.49-1.5S11.12 2 11.942 2c.823 0 1.49.672 1.49 1.5ZM18.895 9c-.594-3.002-2.743-5.362-5.469-6M4.99 9c.593-3.002 2.743-5.362 5.468-6M11.942 19v2c0 .552-.445 1-.993 1H8.962h5.96"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.976 5c-.001 4.048 4.209 2.891 4.209 2.891 5.723 2.609 6.22-2.391 6.22-2.391M20 10.991c-1.976.607-5.647 1.01-8.057 1.01s-5.967-.389-7.944-.996C4 15.883 7.93 19 11.943 19s7.679-2.918 8.058-8.009Z"
      />
    </svg>
  );
};
export default IceCream_01;
