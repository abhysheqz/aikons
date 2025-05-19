import React from "react";
const StoreRemove_01: React.FC<
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
        d="M3 10.002v11h10m8-11v3M16 16.002l3 3m0 0 3 3m-3-3-3 3m3-3 3-3M6 17.002h5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.136 9.765c-1.199 1.308-2.882 1.307-3.857 1.133-1.506-.27-2.646-1.465-3.278-2.374a.01.01 0 0 1-.002-.009l2.05-6.518h15.905L22 8.494a.01.01 0 0 1-.001.009c-.878 1.314-3.333 3.812-6.783 1.65l-.488-.223m-5.592-.165c.519-.565.947-1.376 1.188-2.522M9.136 9.765c.591.667 2.234 1.76 4.269.962a4.3 4.3 0 0 0 1.323-.797m0 0c.855-.774 1.135-1.773 1.339-2.687"
      />
    </svg>
  );
};
export default StoreRemove_01;
