import React from "react";
const RainDrop: React.FC<
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
        d="M12 1.25c.242.154 1.355.845 1.765 1.137.818.582 1.911 1.43 3.007 2.487 2.162 2.086 4.478 5.13 4.478 8.677 0 5.08-4.141 9.199-9.25 9.199s-9.25-4.118-9.25-9.199c0-3.546 2.316-6.59 4.478-8.677a26.6 26.6 0 0 1 3.007-2.487c.41-.292 1.523-.983 1.765-1.137"
      />
    </svg>
  );
};
export default RainDrop;
