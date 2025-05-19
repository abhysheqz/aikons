import React from "react";
const Archive_01: React.FC<
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
        d="M10 20.5V8.25H2V20.5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1m0-17v3.25H2V3.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1m-4 13a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zM16.768 3.039 11.72 4.488a1 1 0 0 0-.688 1.216l.77 2.925 6.948-2.043-.749-2.842a.994.994 0 0 0-1.234-.705m-1.77 17.717L12.186 10.08l6.947-2.043 2.834 10.759a1 1 0 0 1-.688 1.216l-5.047 1.45a.994.994 0 0 1-1.234-.706m2.241-4.722a1 1 0 1 0 .518 1.932l.009-.002a1 1 0 0 0-.518-1.932z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Archive_01;
