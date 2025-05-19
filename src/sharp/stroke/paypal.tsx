import React from "react";
const Paypal: React.FC<
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
        strokeWidth={1.5}
        d="m7.999 20.013 1.521-7.03h3.334c.65 0 1.305-.09 1.898-.355 3.134-1.405 3.97-3.895 4.296-5.232M7.998 20.013H3.003l4.02-18.015 7.23.134c.591.01 1.188.06 1.745.26 1.947.696 3.468 2.294 3.05 5.004M8 20.013l-.5 1.989h4.066l1.48-5.995c8.9 1.064 9.415-6.75 6.003-8.611"
      />
    </svg>
  );
};
export default Paypal;
