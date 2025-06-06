import React from "react";
const Cloud: React.FC<
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
        d="M17.478 10h.022a4.5 4.5 0 1 1 0 9H7a5 5 0 0 1-.48-9.977M17.478 10q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 10a5.48 5.48 0 0 1-1.235 3M6.52 9.023Q6.757 9 7 9c1.126 0 2.165.372 3 1"
      />
    </svg>
  );
};
export default Cloud;
