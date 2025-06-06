import React from "react";
const ScreenRotation: React.FC<
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
        d="m1.281 11.927.747.073.746.074v.002l-.001.015-.006.071q-.007.097-.013.29c-.007.252-.007.62.022 1.06.059.889.236 2.056.696 3.21.459 1.15 1.192 2.27 2.357 3.106.946.678 2.215 1.195 3.93 1.363l-.427-.856 1.342-.67.997 2A.75.75 0 0 1 11 22.75c-2.623 0-4.589-.66-6.045-1.703-1.45-1.04-2.338-2.42-2.876-3.77-.537-1.345-.734-2.677-.8-3.665a13 13 0 0 1-.008-1.55l.007-.096.002-.027v-.009zM12.362 1.605A.75.75 0 0 1 13 1.25c2.623 0 4.589.66 6.044 1.703 1.452 1.04 2.34 2.42 2.877 3.77.537 1.345.734 2.678.8 3.665a13 13 0 0 1 .008 1.55l-.007.096-.002.027v.009l-.001.002v.002L21.972 12l-.746-.074v-.002l.002-.015q.001-.023.005-.071.007-.097.013-.289c.007-.253.007-.62-.022-1.062-.059-.888-.236-2.055-.696-3.21-.459-1.15-1.192-2.27-2.357-3.105-.946-.678-2.215-1.195-3.93-1.363l.427.856-1.342.67-.997-2a.75.75 0 0 1 .033-.73"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.6 4.25a.75.75 0 0 1 .53.22l8.4 8.4a.75.75 0 0 1 0 1.06l-5.6 5.6a.75.75 0 0 1-1.06 0l-8.4-8.4a.75.75 0 0 1 0-1.06l5.6-5.6a.75.75 0 0 1 .53-.22"
      />
    </svg>
  );
};
export default ScreenRotation;
