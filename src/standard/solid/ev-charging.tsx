import React from "react";
const EvCharging: React.FC<
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
        d="M1.125 22a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2h-15a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22.876 5a.75.75 0 0 0-1.167-.624l-3 2a.75.75 0 0 0-.334.624v4a.75.75 0 0 0 .588.732l.088.478.015.076c.065.343.128.678.181 1.012.114.723.17 1.386.09 1.982-.126.936-.876 1.727-1.91 1.925-.221.042-.51.045-1.302.045a.75.75 0 0 0 0 1.5h.088c.671 0 1.115 0 1.494-.072 1.626-.31 2.899-1.58 3.116-3.198.11-.814.027-1.648-.095-2.416a36 36 0 0 0-.187-1.053l-.016-.08-.05-.267a.75.75 0 0 0 .346-.383l.897-2.219.757-.398a.75.75 0 0 0 .4-.664z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.125 4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v6h-11zm10-3a3 3 0 0 1 3 3v18a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1V4a3 3 0 0 1 3-3zm-3.376 12.916a.75.75 0 0 0-1.249-.832l-2 3a.75.75 0 0 0 .625 1.166h1.598l-1.222 1.834a.75.75 0 0 0 1.248.832l2-3a.75.75 0 0 0-.624-1.166h-1.6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EvCharging;
