import React from "react";
const ShippingTruck_02: React.FC<
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
        d="M16.886 20.75a3.42 3.42 0 0 0 3.28-2.43h2.584v-7.587l-3.386-5.052h-3.455V3.25H1.25v15.07h2.585a3.42 3.42 0 0 0 3.279 2.43 3.42 3.42 0 0 0 3.279-2.43h3.215a3.42 3.42 0 0 0 3.278 2.43m-.976-6.665q.466-.138.977-.14a3.42 3.42 0 0 1 3.279 2.43h.63v-5.053l-2.478-3.697H15.91zM7.114 15.89c-.81 0-1.466.653-1.466 1.458 0 .806.657 1.459 1.466 1.459.81 0 1.466-.653 1.466-1.459 0-.805-.656-1.458-1.466-1.458m8.307 1.458c0-.805.656-1.458 1.466-1.458s1.466.653 1.466 1.458c0 .806-.657 1.459-1.466 1.459-.81 0-1.466-.653-1.466-1.459"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShippingTruck_02;
