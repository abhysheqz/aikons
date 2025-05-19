import React from "react";
const MoneySend_01: React.FC<
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
        d="M2.017 17.5C4.217 17.5 6 19.281 6 21.481M18 21.482v-.092a3.89 3.89 0 0 1 3.89-3.89M6 7.517c0 2.2-1.783 3.982-3.983 3.982M18 7.517c0 2.18 1.769 3.951 3.942 3.982"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 7.501c2.175.012 3.353.109 4.121.877.879.879.879 2.293.879 5.121v2c0 2.829 0 4.243-.879 5.122-.878.878-2.293.878-5.121.878H8c-2.828 0-4.243 0-5.121-.878C2 19.74 2 18.328 2 15.499v-2c0-2.828 0-4.242.879-5.121C3.647 7.61 4.825 7.513 7 7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 14.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9.5 5.001s1.8-2.5 2.5-2.5 2.5 2.5 2.5 2.5m-2.5 3v-5"
      />
    </svg>
  );
};
export default MoneySend_01;
