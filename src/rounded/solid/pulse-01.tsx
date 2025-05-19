import React from "react";
const Pulse_01: React.FC<
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
        d="M13.083 5.003a1 1 0 0 1 .896.793l1.84 8.836 1.258-3.017A1 1 0 0 1 18 11h4a1 1 0 1 1 0 2h-3.333l-2.244 5.385a1 1 0 0 1-1.902-.181l-1.812-8.697-2.277 5.855a1 1 0 0 1-1.894-.087L7.372 11.19l-.436 1.161A1 1 0 0 1 6 13H2a1 1 0 1 1 0-2h3.307l1.257-3.351a1 1 0 0 1 1.898.076l1.183 4.143 2.423-6.23a1 1 0 0 1 1.015-.635"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pulse_01;
