import React from "react";
const PenConnectUsb: React.FC<
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
        d="m15.914 8.032-9.906 9.955v3.012h2.98l10.054-10.012m-3.128-2.955 3.057-3.004a.1.1 0 0 1 .142.001L21.97 7.96a.1.1 0 0 1-.001.142l-2.928 2.885m-3.128-2.955 3.128 2.955M2.987 3h1.965a.1.1 0 0 1 .09.055L6.467 6M5.014 8.99h1.945a.1.1 0 0 0 .095-.07L8.02 6M2 5.999l8.014-.004m0 0c0 .557.454 1.04 1 1.04.547 0 .99-.483.99-1.04s-.443-1.039-.99-1.039-1 .482-1 1.039Z"
      />
    </svg>
  );
};
export default PenConnectUsb;
