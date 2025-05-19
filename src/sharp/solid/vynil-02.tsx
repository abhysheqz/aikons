import React from "react";
const Vynil_02: React.FC<
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
        d="M22.75 5.75c-.974 0-1.708-.36-2.25-.839v4.59A3.25 3.25 0 1 1 19 6.76V1.253h1.508c.015.066.04.876.076.997.075.244.195.562.376.872.362.62.906 1.128 1.79 1.128z"
      />
      <path
        fill="currentColor"
        d="M12 1.25c2.01 0 3.89.551 5.5 1.511v1.995a4.75 4.75 0 0 0-4.99 5.051 2.25 2.25 0 1 0 1.513 3.178A4.75 4.75 0 0 0 22 9.5V8.048c.484 1.224.75 2.557.75 3.953 0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25"
      />
    </svg>
  );
};
export default Vynil_02;
