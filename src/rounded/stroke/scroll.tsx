import React from "react";
const Scroll: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 6.008h6M11 10h6M11 14h3M19 22a2 2 0 0 0 2-2V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-2c-2.828 0-4.243 0-5.121.879C7 3.757 7 5.172 7 8v10m12 4a2 2 0 0 1-2-2c0-.943 0-1.414-.293-1.707S15.943 18 15 18H7m12 4H5a2 2 0 0 1-2-2c0-.943 0-1.414.293-1.707S4.057 18 5 18h2"
      />
    </svg>
  );
};
export default Scroll;
