import React from "react";
const LocationUpdate_01: React.FC<
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
        d="M10.935 17.216c.225.128.414.226.548.293l.529.241.528-.241a11.768 11.768 0 0 0 2.201-1.43c1.185-.982 2.52-2.538 2.52-4.611 0-2.882-2.35-5.218-5.25-5.218s-5.25 2.336-5.25 5.218c0 2.073 1.336 3.63 2.52 4.61.605.501 1.206.882 1.654 1.138m1.07-7.716a1.997 1.997 0 0 0-1.993 2c0 1.105.893 2 1.994 2h.012a1.997 1.997 0 0 0 1.994-2c0-1.105-.893-2-1.994-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.01 3.205a8.8 8.8 0 0 0-8.064 5.277L2.155 7.7a10.75 10.75 0 0 1 9.855-6.45c5.937 0 10.75 4.813 10.75 10.75a.977.977 0 0 1-1.48.838l-2.443-1.466 1.005-1.676.77.462a8.8 8.8 0 0 0-8.602-6.953M1.756 11.15a.98.98 0 0 1 .984.012l2.443 1.466-1.006 1.676-.77-.462a8.799 8.799 0 0 0 16.667 1.676l1.79.782a10.75 10.75 0 0 1-9.854 6.45C6.073 22.75 1.26 17.937 1.26 12c0-.352.19-.677.496-.85"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationUpdate_01;
