import React from "react";
const Bicycle: React.FC<
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
        strokeWidth={1.5}
        d="M6 20.008a4 4 0 0 0 4-4.002 4.001 4.001 0 1 0-4 4.002ZM18 20.008c2.21 0 4-1.792 4-4.002a4.001 4.001 0 1 0-4 4.002Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 16.006h5l5-8.004M12.5 13.505 7 7.002m0 0H5m2 0h3M18.043 16.012l-3.044-12c1.43 0 4.375-.17 5.02 2.228"
      />
    </svg>
  );
};
export default Bicycle;
