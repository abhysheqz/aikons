import React from "react";
const SolarPower: React.FC<
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
        d="m2.977 16.664 1.786-5A1 1 0 0 1 5.705 11h12.59a1 1 0 0 1 .942.664l1.786 5A1 1 0 0 1 20.08 18H3.92a1 1 0 0 1-.942-1.336M9.5 11 8 18m6.5-7 1.5 7M4 14.5h16M14.333 5.5A2.333 2.333 0 0 1 12 7.833M14.333 5.5A2.333 2.333 0 0 0 12 3.167M14.333 5.5H15.5M12 7.833A2.333 2.333 0 0 1 9.667 5.5M12 7.833V9M9.667 5.5A2.333 2.333 0 0 1 12 3.167M9.667 5.5H8.5M12 3.167V2m1.65 1.85.825-.825M10.35 7.15l-.825.825m4.125-.825.825.825M10.35 3.85l-.825-.825"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 22v-4m-6 4v-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 22h20"
      />
    </svg>
  );
};
export default SolarPower;
