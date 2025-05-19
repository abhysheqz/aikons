import React from "react";
const DiscountTag_02: React.FC<
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
        d="M11.586 1.664a.75.75 0 0 0-.53.22L2.47 10.47a2.75 2.75 0 0 0 0 3.889l7.172 7.171a2.75 2.75 0 0 0 3.889 0l8.586-8.585a.75.75 0 0 0 .22-.53v-10a.75.75 0 0 0-.75-.75zm-.004 6.75a1 1 0 1 0 0 2h.015a1 1 0 1 0 0-2zm.004 6a1 1 0 1 0 0 2h.015a1 1 0 1 0 0-2zm-4.5-2a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2h-7a1 1 0 0 1-1-1m10.701-4.651a1.55 1.55 0 1 1 0-3.099 1.55 1.55 0 0 1 0 3.099"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiscountTag_02;
