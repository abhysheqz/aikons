import React from "react";
const HydroPower: React.FC<
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
        d="M9.5 4.5 9.96 2A10.22 10.22 0 0 0 2 9.96m17.5-.46 2.5.46A10.22 10.22 0 0 0 14.04 2m.46 17.5-.46 2.5A10.22 10.22 0 0 0 22 14.04M9.96 22A10.22 10.22 0 0 1 2 14.04l2.5.46"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7.5S8 10 8 12.755c0 1.846 1.515 3.745 4 3.745s4-1.899 4-3.745C16 10 12 7.5 12 7.5Z"
      />
    </svg>
  );
};
export default HydroPower;
