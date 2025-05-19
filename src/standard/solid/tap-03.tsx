import React from "react";
const Tap_03: React.FC<
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
        d="M8.755 5.997a2.247 2.247 0 0 1 4.495 0v4.253h3.25A3.75 3.75 0 0 1 20.25 14v5a3.75 3.75 0 0 1-3.75 3.75h-5.93a2.75 2.75 0 0 1-2.288-1.224l-3.999-5.995a2.49 2.49 0 0 1 3.576-3.43l.896.768z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 2.75A3.25 3.25 0 0 0 7.75 6a.75.75 0 0 1-1.5 0 4.75 4.75 0 0 1 9.5 0 .75.75 0 0 1-1.5 0A3.25 3.25 0 0 0 11 2.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tap_03;
