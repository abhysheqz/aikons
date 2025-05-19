import React from "react";
const BitcoinCloud: React.FC<
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
        d="M17.5 17.5a4.5 4.5 0 1 0-.022-9m0 0q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477m10.958.977a5.48 5.48 0 0 1-1.235 3M6.52 7.523a5 5 0 0 0 0 9.954m0-9.954Q6.757 7.5 7 7.5c1.126 0 2.165.372 3 1M9.5 14.5h1m2.5 3h-2.5m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3v-3m0 3v3m-1 0h1m0-6H12m-1.5 6H12m0-6v-1m0 7v1"
      />
    </svg>
  );
};
export default BitcoinCloud;
