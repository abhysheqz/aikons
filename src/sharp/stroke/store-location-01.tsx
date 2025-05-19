import React from "react";
const StoreLocation_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.999 10.002v11h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.999 17.002h5M18.499 13.502c1.933 0 3.5 1.538 3.5 3.435 0 2.145-2 3.565-3.5 5.065-1.5-1.5-3.5-2.964-3.5-5.065 0-1.897 1.567-3.435 3.5-3.435Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.499 17.002h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.136 9.765c-1.199 1.308-2.882 1.308-3.857 1.133-1.506-.27-2.646-1.465-3.278-2.374a.01.01 0 0 1-.002-.009l2.05-6.517h15.905L22 8.494a.01.01 0 0 1-.001.009c-.878 1.314-3.333 3.812-6.783 1.65l-.488-.222m-5.592-.166c.519-.565.947-1.375 1.188-2.522M9.136 9.765c.591.667 2.234 1.76 4.269.962a4.3 4.3 0 0 0 1.323-.796m0 0c.855-.775 1.135-1.774 1.339-2.688"
      />
    </svg>
  );
};
export default StoreLocation_01;
