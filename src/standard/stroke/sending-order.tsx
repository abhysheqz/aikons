import React from "react";
const SendingOrder: React.FC<
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
        d="M12 18c-2.684 0-5.134.378-7 1M18 13a4 4 0 1 0-2.225-7.325 4.002 4.002 0 0 0-7.55 0A4 4 0 1 0 6 13v5.5M15 18.5h5.5m-2 2.5 2.5-2.5-2.5-2.5"
      />
    </svg>
  );
};
export default SendingOrder;
