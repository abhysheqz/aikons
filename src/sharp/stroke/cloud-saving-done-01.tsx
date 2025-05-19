import React from "react";
const CloudSavingDone_01: React.FC<
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
        d="M7 18a5 5 0 0 1-.48-9.977M17.478 9h.022a4.5 4.5 0 0 1 .5 8.973M17.478 9q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 9a5.48 5.48 0 0 1-1.235 3M6.52 8.023Q6.757 8 7 8c1.126 0 2.165.372 3 1"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m9 19 2 2 6-6" />
    </svg>
  );
};
export default CloudSavingDone_01;
