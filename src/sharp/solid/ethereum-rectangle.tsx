import React from "react";
const EthereumRectangle: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm9 3a.75.75 0 0 1 .624.334l3.698 5.547L12 12.702 7.678 11.13l3.698-5.546A.75.75 0 0 1 12 5.25m.257 8.955 4.19-1.524-3.823 5.735a.75.75 0 0 1-1.248 0l-3.823-5.735 4.191 1.524c.166.06.347.06.513 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EthereumRectangle;
