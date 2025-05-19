import React from "react";
const OpenSource: React.FC<
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
        d="M1.25 12.5C1.25 6.563 6.063 1.75 12 1.75S22.75 6.563 22.75 12.5a10.75 10.75 0 0 1-6.058 9.675.75.75 0 0 1-1.03-.412l-2.125-5.685a.75.75 0 0 1 .282-.884 3.25 3.25 0 1 0-3.638 0 .75.75 0 0 1 .282.884l-2.125 5.685a.75.75 0 0 1-1.03.412A10.75 10.75 0 0 1 1.25 12.5"
      />
    </svg>
  );
};
export default OpenSource;
