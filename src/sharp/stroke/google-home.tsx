import React from "react";
const GoogleHome: React.FC<
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
        d="M17.989 3.018c0 1.656-2.688 3-6.004 3s-6.003-1.344-6.003-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.992 21.002c5.46 0 9.872-4.321 10.01-9.791 0-3.244-.912-5.531-4.036-8.213L5.98 3.06C3.462 4.846 2 7.824 2 11.137c0 5.47 4.533 9.865 9.992 9.865Z"
      />
    </svg>
  );
};
export default GoogleHome;
