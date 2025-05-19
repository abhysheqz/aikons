import React from "react";
const Wise: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 11H5.024a.01.01 0 0 1-.007-.017L9.5 6.5 7.008 2.015A.01.01 0 0 1 7.017 2h11.968a.01.01 0 0 1 .01.014L11 22"
      />
    </svg>
  );
};
export default Wise;
