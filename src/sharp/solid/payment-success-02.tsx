import React from "react";
const PaymentSuccess_02: React.FC<
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
        d="M22.75 14.086 15.836 21l-3.414-3.414 1.414-1.414 2 2 5.5-5.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.182 3.233c3.924.981 6.078.97 7.843.735 1.73-.23 3.418-.757 5.975-.757 2.063 0 3.624.258 4.682.522 1.2.3 2.068.764 2.068.764v7.823l-1.414-1.414-5.5 5.5-2-2-3.182 3.182.54.539c-.31.054-.63.107-.97.152-1.983.265-4.33.253-8.406-.765l-.568-.142V3zm.568 12.962c1.229.29 2.275.478 3.187.59a4.005 4.005 0 0 0-3.187-3.219zM12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6m6.518-3.14c.16 1.608 1.374 3.08 2.732 3.494V5.469a10 10 0 0 0-.931-.28 15 15 0 0 0-1.801-.33M2.75 7.922c1.367-.284 2.537-1.308 2.995-2.477A30 30 0 0 1 2.75 4.91z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PaymentSuccess_02;
