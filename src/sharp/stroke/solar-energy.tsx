import React from "react";
const SolarEnergy: React.FC<
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
        d="m9 5 .96-3A10.22 10.22 0 0 0 2 9.96M19 9l3 .96A10.22 10.22 0 0 0 14.04 2M15 19l-.96 3A10.22 10.22 0 0 0 22 14.04M9.96 22A10.22 10.22 0 0 1 2 14.04L5 15M15.333 12A3.333 3.333 0 0 1 12 15.333M15.333 12A3.333 3.333 0 0 0 12 8.667M15.333 12H17m-5 3.333A3.333 3.333 0 0 1 8.667 12M12 15.333V17m-3.333-5A3.333 3.333 0 0 1 12 8.667M8.667 12H7m5-3.333V7m2.357 2.643 1.179-1.179m-5.893 5.893-1.179 1.179m5.893-1.179 1.179 1.179M9.643 9.643 8.464 8.464"
      />
    </svg>
  );
};
export default SolarEnergy;
