import React from "react";
const ShippingTruck_01: React.FC<
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
        d="M22.75 12.972c0-3.864-3.02-7.025-6.84-7.275V3.25H1.25v15.074l2.583-.012a3.42 3.42 0 0 0 3.28 2.438 3.42 3.42 0 0 0 3.28-2.43h3.215a3.42 3.42 0 0 0 3.278 2.43 3.42 3.42 0 0 0 3.28-2.43h2.584zm-6.84 1.113q.466-.139.977-.14a3.42 3.42 0 0 1 3.279 2.43h.63v-3.403c0-2.79-2.147-5.08-4.886-5.326zm-8.796 1.804c-.81 0-1.466.652-1.466 1.458s.657 1.458 1.466 1.458c.81 0 1.466-.653 1.466-1.458 0-.806-.656-1.458-1.466-1.458m8.307 1.458c0-.806.657-1.458 1.466-1.458.81 0 1.466.652 1.466 1.458s-.656 1.458-1.466 1.458-1.466-.653-1.466-1.458"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShippingTruck_01;
