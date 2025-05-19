import React from "react";
const DollarReceive_02: React.FC<
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
        d="M17.883 8.576a1 1 0 0 1 .617.924V11H21a1 1 0 1 1 0 2h-2.5v1.5a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.09-.217M7 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 6C4.79 6 3.417 7.382 3.417 8.63c0 .774.225 1.206.627 1.496.474.343 1.363.615 2.956.615 1.731 0 3.235.261 4.323 1.023C12.49 12.58 13 13.837 13 15.37c0 1.613-.673 2.843-1.856 3.623C10.025 19.729 8.549 20 7 20c-1.62 0-3.083-.415-4.17-1.183C1.73 18.041 1 16.884 1 15.5a1 1 0 1 1 2 0c0 .616.311 1.209.983 1.683.683.482 1.72.817 3.017.817 1.367 0 2.391-.248 3.044-.678.588-.387.956-.971.956-1.952 0-1.059-.323-1.617-.823-1.967-.579-.405-1.575-.662-3.177-.662-1.74 0-3.143-.282-4.128-.994-1.056-.764-1.455-1.887-1.455-3.117C1.417 5.868 4.147 4 7 4s5.583 1.868 5.583 4.63a1 1 0 1 1-2 0C10.583 7.382 9.21 6 7 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DollarReceive_02;
