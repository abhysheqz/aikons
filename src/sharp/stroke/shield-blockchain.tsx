import React from "react";
const ShieldBlockchain: React.FC<
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
        strokeWidth={1.5}
        d="M12.001 11.5 8.205 9.365m3.796 2.135 3.796-2.135M12.001 11.5v4.201m4-6.45-4-2.25-4 2.25v4.5l4 2.25 4-2.25z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 10.5v-6c-5-.5-9-3-9-3S8 4 3 4.5v6c0 7.5 9 11 9 11s9-3.5 9-11Z"
      />
    </svg>
  );
};
export default ShieldBlockchain;
