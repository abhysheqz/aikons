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
        d="M10.5 4.5h-3v-2h3zM13.5 7.5h-6v-2h6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 17.586V2.5h-2v18a1 1 0 0 0 1 1h18v-2H5.545l5.141-6.61L13.9 15.3a1 1 0 0 0 1.307-.093l5-5-1.414-1.414-4.387 4.387L11.1 10.7a1 1 0 0 0-1.39.186z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AnalysisTextLink;
