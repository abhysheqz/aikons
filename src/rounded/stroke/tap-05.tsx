import React from "react";
const Tap_05: React.FC<
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
        d="M13.984 6.012c0-2.215-1.779-4.01-3.973-4.01s-3.974 1.795-3.974 4.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.376 21.993-.104-1.096c-.488-2.018-1.154-2.284-2.239-3.73-.49-.652-1.513-1.577-2.35-2.827-.557-.832.187-2.725 1.883-2.148.282.096.52.289.73.5l1.646 1.654c-.013-2.338.017-7.097-.02-8.557-.036-1.46 2.498-1.93 2.648.066v4.492m0 0v.865m0-.865c.828-1.098 2.396-1.137 2.625.701m0 0c.037.3.04.65 0 1.053m0-1.053c.418-1.284 2.258-.774 2.624.72m0 0c.086.355 0 .765.035 1.238m-.035-1.237c.237-.72 2.865-.774 2.616 2.009l.065 2.524c-.1 1.507-.322 2.138-.863 2.867-.28.377-.649.71-.79 1.159-.117.376-.192.927-.11 1.672"
      />
    </svg>
  );
};
export default Tap_05;
