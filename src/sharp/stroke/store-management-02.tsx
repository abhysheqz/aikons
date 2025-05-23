import React from "react";
const StoreManagement_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.5 15.333V14m0 1.333c-.939 0-1.762.5-2.226 1.254m2.226-1.254c.939 0 1.762.5 2.226 1.254M17.5 22v-1.333m0 0c-.939 0-1.762-.5-2.226-1.254m2.226 1.254c.939 0 1.762-.5 2.226-1.254m-5.726.81 1.274-.81M21 15.779l-1.274.809M14 15.777l1.274.81M21 20.222l-1.274-.809m-4.452 0A2.7 2.7 0 0 1 14.875 18c0-.52.146-1.004.399-1.413m4.452 0c.253.41.399.894.399 1.413 0 .52-.146 1.004-.399 1.413M3 11v10h8M5 11a3 3 0 0 0 3-3c0 2 2.136 3 4 3s4-1 4-3a3 3 0 1 0 6 0l-2-3.5V2H4v2.5L2 8a3 3 0 0 0 3 3Z"
      />
    </svg>
  );
};
export default StoreManagement_02;
