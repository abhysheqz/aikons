import React from "react";
const Garage: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.023 12.959H7.015v9.04h10.008z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.015 15.973h10.008M7.015 18.986h10.008"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.028 6.933h-.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.129 21.999h-4.13l.108-13.997a.1.1 0 0 1 .044-.083l8.75-5.9a.1.1 0 0 1 .111-.002l8.945 5.902a.1.1 0 0 1 .045.084v13.996h-4.138"
      />
    </svg>
  );
};
export default Garage;
