import React from "react";
const HandBeater: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6.917 21.826-4.243-4.24a.6.6 0 0 1 .075-.913 3.6 3.6 0 0 1 4.641.384l.056.055a3.6 3.6 0 0 1 .384 4.639.6.6 0 0 1-.913.075M7.5 17.002l4.002-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.998 9.502h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.363 5.68c3.429-1.75 3.262-3 4.2-3.664.293-.127 1.209.452 2.114 1.274 1.026.932 1.993 2.213 1.8 2.706-.623.696-1.89.987-3.272 3.532-1.769 2.965-4.23 3.864-5.645 4.38l-.036.014c-.313.114-.669.081-.924-.134-.427-.358-.756-.74-1.048-1.024-1.058-.964-1.058-1.234-1.058-1.489.061-1.029 2.123-4.526 3.87-5.595"
      />
    </svg>
  );
};
export default HandBeater;
