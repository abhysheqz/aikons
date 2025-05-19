import React from "react";
const Cd: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m14.183-5.96a.75.75 0 0 1 1.053-.133 7.6 7.6 0 0 1 1.635 1.746.75.75 0 0 1-1.242.84 6.1 6.1 0 0 0-1.312-1.4.75.75 0 0 1-.134-1.052m-9.36 9.333a.75.75 0 0 1 1.043.19c.356.512.786.966 1.274 1.344a.75.75 0 0 1-.919 1.186 7.6 7.6 0 0 1-1.587-1.676.75.75 0 0 1 .189-1.044M9.75 12a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cd;
