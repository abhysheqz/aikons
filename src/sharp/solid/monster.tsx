import React from "react";
const Monster: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M11 10.5h2.009v2H11z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 12.5a9.25 9.25 0 1 1 15.5 6.82v3.43H5.75v-3.43a9.23 9.23 0 0 1-3-6.82m4-1c0-2.512 2.537-4.25 5.25-4.25s5.25 1.738 5.25 4.25-2.537 4.25-5.25 4.25-5.25-1.738-5.25-4.25M12 19.25a2.85 2.85 0 0 1-1.98-.79L8.98 19.54a4.35 4.35 0 0 0 3.02 1.21c1.172 0 2.24-.461 3.02-1.21l-1.04-1.082a2.85 2.85 0 0 1-1.98.791"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.663 2.725c.7.739 1.193 1.657 1.32 2.343l-1.966.364c-.04-.213-.297-.795-.805-1.332-.491-.518-1.08-.85-1.712-.85v-2c1.368 0 2.446.718 3.163 1.475M17.788 4.1c-.508.536-.765 1.118-.805 1.331l-1.966-.364c.127-.686.62-1.604 1.32-2.343.717-.757 1.795-1.475 3.163-1.475v2c-.632 0-1.22.332-1.712.85"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Monster;
