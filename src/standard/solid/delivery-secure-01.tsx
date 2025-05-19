import React from "react";
const DeliverySecure_01: React.FC<
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
        d="m22.636 7.728-2.482-4.82a3 3 0 0 0-2.683-1.658H6.523A3 3 0 0 0 3.84 2.908L1.333 7.78h.001a.75.75 0 0 0-.084.347v11.84A2.75 2.75 0 0 0 4 22.717l8.89.034a2.2 2.2 0 0 1-.14-.784v-5.5a2.25 2.25 0 0 1 1.548-2.138 4.251 4.251 0 0 1 8.404 0q.024.008.048.017v-6.22a.75.75 0 0 0-.114-.397M6.523 3.25a1 1 0 0 0-.894.553L3.79 7.376H11V3.25zM13 7.376h7.203l-1.837-3.573a1 1 0 0 0-.895-.553H13zm5.5 6.34c-.69 0-1.25.56-1.25 1.25v.75h2.5v-.75c0-.69-.56-1.25-1.25-1.25m2.75 2v-.75a2.75 2.75 0 1 0-5.5 0v.75H15a.75.75 0 0 0-.75.75v5.5c0 .415.336.75.75.75h7a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75zm-10.975-5.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliverySecure_01;
