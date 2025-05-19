import React from "react";
const Plate: React.FC<
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
        d="M9 2.25a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5M5.75 10a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M9 5.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.044 21.75a6.7 6.7 0 0 1-5.345-2.655c1.08-.2 2.095-.59 3.008-1.13a3.74 3.74 0 1 0 4.349-6.072 9.3 9.3 0 0 0 .1-3.213 6.705 6.705 0 0 1-2.111 13.071"
      />
      <path
        fill="currentColor"
        d="M15.01 17.032a9.3 9.3 0 0 0 2.583-3.604 2.24 2.24 0 0 1-2.584 3.604"
      />
    </svg>
  );
};
export default Plate;
