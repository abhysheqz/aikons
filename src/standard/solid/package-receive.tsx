import React from "react";
const PackageReceive: React.FC<
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
        d="M12 1.125a1 1 0 0 1 1 1v2.793h1.292c.266 0 .544.097.64.344a1 1 0 0 1-.225 1.07l-2 2a1 1 0 0 1-1.415 0l-2-2a1 1 0 0 1-.225-1.07c.096-.247.374-.344.64-.344h1.292V2.125a1 1 0 0 1 1-1m-9.747 6.17a1 1 0 0 1 .584-1.057l3.35-1.489A1 1 0 0 1 7 6.577l-1.294.575L12 9.95l6.295-2.797L17 6.577a1 1 0 1 1 .812-1.828l3.35 1.49a1 1 0 0 1 .591.983v10.903a.75.75 0 0 1-.445.685l-9.004 4a.75.75 0 0 1-.61 0l-8.995-4a.75.75 0 0 1-.446-.685zm4.082 4.16a.75.75 0 1 0-.67 1.34l2 1a.75.75 0 0 0 .67-1.34z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageReceive;
