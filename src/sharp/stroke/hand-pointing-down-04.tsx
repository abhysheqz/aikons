import React from "react";
const HandPointingDown_04: React.FC<
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
        d="M13.794 11.494v1.903c0 .174-.028.455-.08.61m0 0c-.197.577-.686.993-1.31.993h-1.71m3.02-.993h1.783c.625 0 1.117-.432 1.314-1.009m.083-2.189v1.566c0 .174-.03.468-.083.623m0 0h1.714c.988-.086 1.471-.775 1.471-1.582v-6.44c0-1.641-1.303-2.86-2.87-2.972H8.098L4.503 7.552c-1.341 2.273.108 3.75 2.947 6.312M10.693 15v-2.992m0 2.992v5.254q0 .408-.1.744c-.296.984-1.598 1.312-2.4.67-.341-.273-.583-.626-.583-1.011V9.493"
      />
    </svg>
  );
};
export default HandPointingDown_04;
