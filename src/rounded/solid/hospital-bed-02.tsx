import React from "react";
const HospitalBed_02: React.FC<
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
        d="M4.37 5.254h15.26c.194 0 .364 0 .531.025.765.116 1.4.613 1.814 1.279.09.146.224.417.337.647.163.33.295.596.355.825.14.529.098 1.08-.087 1.546-.18.457-.536.912-1.087 1.099a1.6 1.6 0 0 1-.442.073c-.123.006-.273.006-.438.006H3.387c-.165 0-.315 0-.438-.006a1.6 1.6 0 0 1-.442-.073c-.551-.187-.907-.642-1.087-1.1a2.5 2.5 0 0 1-.087-1.544c.06-.23.246-.606.408-.935.114-.23.194-.392.284-.538.415-.666 1.049-1.163 1.814-1.28a3.5 3.5 0 0 1 .53-.024"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.838 9.458a1 1 0 0 1-.292 1.384l-11.5 7.5a1 1 0 1 1-1.092-1.676l11.5-7.5a1 1 0 0 1 1.384.292"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.163 9.458a1 1 0 0 1 1.383-.292l11.5 7.5a1 1 0 0 1-1.092 1.676l-11.5-7.5a1 1 0 0 1-.291-1.384M6 18.004a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 18.004a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0M7.023 4.015A.2.2 0 0 0 7 4.108v1.897a1 1 0 0 1-2 0V4.108C5 2.865 6.116 1.69 7.508 2.074l2 .552C10.442 2.883 11 3.763 11 4.66v1.345a1 1 0 1 1-2 0V4.66a.18.18 0 0 0-.034-.11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HospitalBed_02;
