import React from "react";
const Estimate_01: React.FC<
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
        strokeWidth={1.5}
        d="M18 8.756V6.8c0-2.263 0-3.394-.775-4.097C16.449 2 15.202 2 12.705 2h-4.41c-2.497 0-3.744 0-4.52.703S3 4.537 3 6.8v6.4c0 2.263 0 3.394.775 4.097.776.703 2.023.703 4.52.703h4.41"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6h9M6 10h1M10 10h1M14 10h1M6 14h1M10 14h1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.706 15.004c-.274-.695-.98-1.51-2.586-1.51-1.866 0-2.652.855-2.811 1.312-.249.611-.272 1.93 1.989 2.005 2.7.09 3.83.457 3.69 1.937-.139 1.48-1.695 1.686-2.868 1.766-1.205-.035-2.695-.287-3.12-1.565M17.994 12v1.436m.009 7.073V22"
      />
    </svg>
  );
};
export default Estimate_01;
