import React from "react";
const MoneyNotFound_03: React.FC<
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
        d="m3 3 18 18M10.232 10.232a2.5 2.5 0 1 0 3.535 3.535"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.657 17.657c.213-.278.343-.612.343-.975V6.927c0-.568-.324-1.082-.867-1.25C20.19 5.383 18.479 5 16 5c-2.646 0-4.172.56-6.209.791M18.22 18.22A22 22 0 0 0 16 18.11c-4.75 0-5.89 1.806-12.855.27A1.47 1.47 0 0 1 2 16.94V6.92c0-.976.92-1.687 1.878-1.497.671.133 1.285.233 1.852.306"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 14.496a4 4 0 0 1 4 4M22 9.47c-1.735 0-3.5-1.93-3.5-3.969M2 9c1.892 0 3.598-1.5 3.904-3.096M19.68 15.68c.672-.43 1.49-.68 2.32-.68"
      />
    </svg>
  );
};
export default MoneyNotFound_03;
