import React from "react";
const Humidity: React.FC<
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
        d="M13.041 1.474a1.89 1.89 0 0 0-2.082 0c-.94.615-3.021 2.08-4.877 4.124C4.244 7.624 2.5 10.358 2.5 13.5a9.5 9.5 0 0 0 19 0c0-3.142-1.744-5.876-3.582-7.902-1.856-2.045-3.936-3.509-4.877-4.124M7.563 6.942c1.66-1.829 3.54-3.169 4.437-3.759.896.59 2.777 1.93 4.437 3.76 1.71 1.884 3.063 4.151 3.063 6.557v.056c-1.317.713-3.916 1.307-7.148-.508-3.066-1.722-5.718-1.964-7.5-1.715.511-1.593 1.525-3.084 2.711-4.39"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Humidity;
