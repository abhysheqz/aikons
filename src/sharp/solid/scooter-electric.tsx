import React from "react";
const ScooterElectric: React.FC<
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
        d="M4 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0M20 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.28 5H14V3h3a1 1 0 0 1 .949.684l3 9A1 1 0 0 1 20 14a4 4 0 0 0-4 4 1 1 0 0 1-1 1H6.514l-2.597-3.996 11.576-.965a6 6 0 0 1 3.17-1.89z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m10.131 5.504 1.737.992L10.723 8.5h3l-2.855 4.996-1.737-.992 1.145-2.004h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ScooterElectric;
