import React from "react";
const MapsOff: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 8v10m7-3v6M15 6v5.5M2 2l20 20M22 17.997V6h-7L8.012 3.001l-1.205.618m14.196 17.376h-5.96L8.012 18 2 20V6.083l2.7-1.384"
      />
    </svg>
  );
};
export default MapsOff;
