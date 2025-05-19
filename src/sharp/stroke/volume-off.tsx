import React from "react";
const VolumeOff: React.FC<
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
        d="M22 22 2 2M9.85 6.668 14 4v6.817M7.915 7.913 7 8.5H2v7h5l7 4.5v-6.002M17 10c.63.767 1 1.705 1 2.72 0 .444-.071.873-.204 1.28M20 8c1.25 1.23 2 2.795 2 4.5 0 1.416-.517 2.737-1.41 3.848"
      />
    </svg>
  );
};
export default VolumeOff;
