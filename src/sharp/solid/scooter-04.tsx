import React from "react";
const Scooter_04: React.FC<
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
        d="M16.28 5h-2.279V3h3a1 1 0 0 1 .949.684l3 9A1 1 0 0 1 20 14a4 4 0 0 0-4 4 1 1 0 0 1-1 1H6.515l-2.597-3.996 11.576-.965a6 6 0 0 1 3.17-1.89z"
      />
    </svg>
  );
};
export default Scooter_04;
