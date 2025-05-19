import React from "react";
const LaptopPerformance: React.FC<
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
        d="M2.286 17.25h19.428l1.457 2.915a.75.75 0 0 1-.671 1.085h-21a.75.75 0 0 1-.67-1.085zM19 2.75A2.25 2.25 0 0 1 21.25 5v10.75H2.75V5A2.25 2.25 0 0 1 5 2.75zm-6.08 3.003a1 1 0 0 0-.849.626l-1.25 3.128-.464-.772A1 1 0 0 0 9.5 8.25h-2a1 1 0 0 0 0 2h1.434l1.209 2.015a1 1 0 0 0 1.786-.144l1.25-3.128.464.772a1 1 0 0 0 .857.485h2a1 1 0 1 0 0-2h-1.434l-1.209-2.015a1 1 0 0 0-.937-.482"
      />
    </svg>
  );
};
export default LaptopPerformance;
