import React from "react";
const Packaging: React.FC<
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
        d="M17.5 22s-.5-2-.5-5c0-5.6 1.333-12.333 2-15 .667 3 2 10 2 14 0 1.22-.186 2.626-.331 3.538a1.91 1.91 0 0 1-1.044 1.4zm0 0H5.062c-.918 0-1.711-.627-1.835-1.537A26 26 0 0 1 3 17C3 11 5 5 5 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.78 2H19c-.096.384-.206.851-.323 1.388A2.04 2.04 0 0 1 16.697 5H4.343c.167-.854.33-1.612.475-2.24A.984.984 0 0 1 5.781 2M6.021 18.074Q6.001 17.562 6 17c0-1.652.116-3.402.297-5.117A.99.99 0 0 1 7.284 11h5.986c.599 0 1.063.523 1.002 1.119A49 49 0 0 0 14 17q0 .48.016.924A1.03 1.03 0 0 1 12.996 19H7.003a.973.973 0 0 1-.98-.926"
      />
    </svg>
  );
};
export default Packaging;
