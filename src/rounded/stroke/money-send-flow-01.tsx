import React from "react";
const MoneySendFlow_01: React.FC<
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
        d="M2.017 7.002C4.217 7.002 6 5.22 6 3.02M18 3.02v.091a3.89 3.89 0 0 0 3.89 3.891"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.017 13.019C4.217 13.019 6 14.8 6 17c-1.553-.047-2.48-.22-3.121-.861s-.815-1.568-.862-3.12m0 0q0 0 0 0m0 0C2 12.444 2 11.782 2 11.017V9c0-2.828 0-4.243.879-5.121C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.879C22 4.757 22 6.172 22 9v2.017c0 2.829 0 4.243-.879 5.122-.641.64-1.568.816-3.121.863 0-2.18 1.769-3.952 3.942-3.983M12 17v4M15 17v2M9 17v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10.004a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
      />
    </svg>
  );
};
export default MoneySendFlow_01;
