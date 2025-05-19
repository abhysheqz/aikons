import React from "react";
const AnalysisTextLink: React.FC<
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
        d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 4a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1M13 8a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1M21.701 9.287a1 1 0 0 1 .012 1.414l-6.39 6.5a1 1 0 0 1-1.318.096l-3.867-2.937-6.385 7.299a1 1 0 1 1-1.506-1.317l7-8a1 1 0 0 1 1.358-.139l3.909 2.968L20.287 9.3a1 1 0 0 1 1.414-.012"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AnalysisTextLink;
