import React from "react";
const SoftDrink_01: React.FC<
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
        d="M17.5 3H14a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0V4a3 3 0 0 1 3-3h3.5a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.444 6.497A.75.75 0 0 1 6 6.25h12a.75.75 0 0 1 .746.825l-.417 4.175H5.67l-.417-4.175a.75.75 0 0 1 .19-.578M17.929 15.25l.25-2.5H5.82l.25 2.5zM17.779 16.75l-.353 3.524a2.75 2.75 0 0 1-2.736 2.476H9.31a2.75 2.75 0 0 1-2.736-2.476L6.22 16.75z"
      />
    </svg>
  );
};
export default SoftDrink_01;
