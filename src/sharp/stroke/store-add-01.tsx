import React from "react";
const StoreAdd_01: React.FC<
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
        d="M3.001 10.004V21h10m8-10.996v2.999"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.001 18.5h7m-3.5 3.5v-6.998M6.001 17.002h5M9.136 9.768c-1.199 1.308-2.882 1.307-3.857 1.133-1.506-.27-2.646-1.465-3.278-2.374a.01.01 0 0 1-.002-.009L4.05 2h15.905L22 8.497a.01.01 0 0 1-.001.009c-.878 1.314-3.333 3.812-6.783 1.65l-.488-.222m-5.592-.166c.519-.565.947-1.376 1.188-2.522M9.136 9.768c.591.667 2.234 1.76 4.269.962a4.3 4.3 0 0 0 1.323-.796m0 0c.855-.775 1.135-1.774 1.339-2.688"
      />
    </svg>
  );
};
export default StoreAdd_01;
