import React from "react";
const Firewall: React.FC<
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
        d="M20 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2ZM2 18h20M12 18v-4m-5 8v-4m10 4v-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11c0-1-1.02-2.36-2.501-3.4C12.506 4.8 12.063 2 12.063 2s-4.119 3.6-1.775 8c-2.129.32-3.12-2-3.35-3.2C5.956 8.09 4.965 9 5.002 11"
      />
    </svg>
  );
};
export default Firewall;
