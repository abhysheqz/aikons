import React from "react";
const PackageProcess: React.FC<
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
        d="M11.395 1.334a.98.98 0 0 0-.792 0l-8.775 3.9a1 1 0 0 0-.184.107.75.75 0 0 0-.391.659v.038a1 1 0 0 0 0 .174V18a.75.75 0 0 0 .445.685l8.996 4a.75.75 0 0 0 .61 0l2.458-1.092a6.25 6.25 0 0 1 6.99-10.206V6.014a.75.75 0 0 0-.353-.638 1 1 0 0 0-.229-.142zM6.44 6.932l-1.815-.807 6.374-2.833 1.815.807zm2.462 1.094L11 8.958l6.374-2.833-2.096-.932zM5.03 11.304a.75.75 0 0 0-.558 1.392l2.5 1a.75.75 0 0 0 .558-1.392z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.251 17a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m6.28-1.53a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 0 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageProcess;
