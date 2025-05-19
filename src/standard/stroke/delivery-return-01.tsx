import React from "react";
const DeliveryReturn_01: React.FC<
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
        d="M2 8v12a2 2 0 0 0 2 2h15a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3h-3m6-8v4.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.447 3.106 2 8h20l-2.447-4.894A2 2 0 0 0 17.763 2H6.237a2 2 0 0 0-1.789 1.106Z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 8V2" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17 18-2-2 2-2M9.5 12h5"
      />
    </svg>
  );
};
export default DeliveryReturn_01;
