import React from "react";
const ChartRing: React.FC<
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
        d="M1 11.75c0-2.698.994-5.165 2.636-7.052L8.44 9.505A4.001 4.001 0 0 0 11 15.68v6.794C5.413 22.09 1 17.435 1 11.75m11.5 3.93v6.794a10.75 10.75 0 0 0 9.974-9.974H15.68a4 4 0 0 1-3.18 3.18M15.68 11h6.794C22.09 5.413 17.434 1 11.75 1c-2.699 0-5.165.994-7.053 2.637l4.801 4.806A4.001 4.001 0 0 1 15.68 11"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartRing;
