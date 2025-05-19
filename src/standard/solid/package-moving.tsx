import React from "react";
const PackageMoving: React.FC<
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
        d="M1.623 13a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M1.623 19a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.019 1.334a.98.98 0 0 0-.792 0l-8.775 3.9a1 1 0 0 0-.184.107.75.75 0 0 0-.391.659v.038a1 1 0 0 0 0 .174V10.5h2.746a2.5 2.5 0 0 1 2 4c.314.418.5.937.5 1.5 0 .554-.18 1.065-.485 1.48.305.414.485.925.485 1.479a2.5 2.5 0 0 1-.581 1.602l4.776 2.124a.75.75 0 0 0 .61 0l9.003-4a.75.75 0 0 0 .446-.685V6.014a.75.75 0 0 0-.354-.638 1 1 0 0 0-.229-.142zM8.064 6.932 6.25 6.125l6.374-2.833 1.815.807zm2.462 1.094 2.097.932 6.374-2.833-2.096-.932z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageMoving;
