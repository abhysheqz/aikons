import React from "react";
const BitcoinCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8.25 7.546h1.494V6.5h1.5v1.046h.904V6.5h1.5v1.086c1.208.217 2.102 1.297 2.102 2.562 0 .718-.288 1.377-.759 1.852.47.475.759 1.134.759 1.852 0 1.265-.894 2.345-2.102 2.562V17.5h-1.5v-1.046h-.904V17.5h-1.5v-1.046H8.25zm6 2.602c0 .629-.49 1.102-1.05 1.102H9.75V9.046h3.45c.56 0 1.05.473 1.05 1.102M13.2 12.75H9.75v2.204h3.45c.56 0 1.05-.473 1.05-1.102s-.49-1.102-1.05-1.102"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinCircle;
