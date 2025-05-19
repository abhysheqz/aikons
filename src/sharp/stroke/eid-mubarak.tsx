import React from "react";
const EidMubarak: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 11.8c0 5.35 4.34 9.688 9.695 9.688A9.7 9.7 0 0 0 22 14.53a8.6 8.6 0 0 1-5.06 1.64c-4.76 0-8.618-3.856-8.618-8.612A8.57 8.57 0 0 1 9.963 2.5C5.94 3.679 3 7.396 3 11.8Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.638 8.486c-1.44-2.365-.05-3.603.42-4.097.367-.384 1.816-1.358 2.447-1.905.535.474 2.098 1.527 2.464 1.911.47.494 1.86 1.732.42 4.096m-5.751-.005h2.876l2.876.005m-5.752-.005v7.003m5.752-6.998v6.998"
      />
    </svg>
  );
};
export default EidMubarak;
