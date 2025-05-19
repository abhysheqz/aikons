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
        d="M13.86 2.443C13.457 2.156 12 1.25 12 1.25s-1.457.906-1.86 1.193a26 26 0 0 0-2.956 2.45C5.067 6.94 2.75 9.971 2.75 13.533c0 5.09 4.141 9.217 9.25 9.217s9.25-4.127 9.25-9.217c0-3.562-2.317-6.593-4.434-8.64a26 26 0 0 0-2.956-2.45m-2.587 1.578c.283-.202.53-.369.726-.498a24.187 24.187 0 0 1 3.46 2.762c2.022 1.956 3.843 4.504 3.843 7.248-1.37.662-3.874 1.243-6.951-.485-2.936-1.65-5.493-1.941-7.269-1.744.64-1.882 1.996-3.605 3.457-5.018.99-.958 1.985-1.731 2.734-2.265"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Humidity;
