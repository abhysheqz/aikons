import React from "react";
const SunCloud_02: React.FC<
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
        d="M17.478 12h.022a4.5 4.5 0 1 1 0 9H7a5 5 0 0 1-.48-9.977M17.478 12q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 12a5.48 5.48 0 0 1-1.235 3M6.52 11.023Q6.757 11 7 11c1.126 0 2.165.372 3 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.455 4.5V3m0 1.5c-2.192 0-3.97 1.79-3.97 4m3.97-4A3.95 3.95 0 0 1 10.5 5.933M2 8.5h1.485m0 0c0 1.195.52 2.267 1.344 3m-1.344-7 1.163 1.172"
      />
    </svg>
  );
};
export default SunCloud_02;
