import React from "react";
const SustainableEnergy: React.FC<
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
        d="M13.5 21.382A9.5 9.5 0 0 1 2.5 12c0-3.412 1.799-6.325 4.5-8m10 16c2.631-1.69 4.5-4.641 4.5-8a9.5 9.5 0 0 0-11-9.382M17 20v-3m0 3h3.5M7 4v3m0-3H3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 7 9 12h6l-3.5 5"
      />
    </svg>
  );
};
export default SustainableEnergy;
