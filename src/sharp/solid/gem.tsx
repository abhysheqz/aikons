import React from "react";
const Gem: React.FC<
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
        d="m11.197 1.849 1.924 11.418L1.5 14.792zM12.7 1.75l1.948 11.554 7.852 2.01zM22.019 16.722l-7.482-1.915L12.7 22.25zM11.177 22.17 13 14.779 1.934 16.231z"
      />
    </svg>
  );
};
export default Gem;
