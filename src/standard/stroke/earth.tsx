import React from "react";
const Earth: React.FC<
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
        d="M12.002 22c-.963-.714-.81-1.544-.326-2.375.742-1.278.742-1.278.742-2.98 0-1.704 1.012-2.502 4.584-1.788C18.607 15.178 19.5 13 22 14M14 2c.51.94.183 2.236-.896 2.663-1.76.697-.5 1.98-1.999 2.773-1 .528-2.499.396-3.998-1.189C6.317 5.413 6 5 5 5"
      />
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default Earth;
