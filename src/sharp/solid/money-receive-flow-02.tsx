import React from "react";
const MoneyReceiveFlow_02: React.FC<
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
        d="M2.182 5.733c2.008.502 3.552.743 4.818.828V9.25h10V5.734c1.575.066 2.802.28 3.682.499 1.2.3 2.068.764 2.068.764V21.5s-1.288-.701-2.431-.987c-.943-.235-2.382-.477-4.319-.477-2.443 0-3.755.473-5.775.743-1.984.264-4.331.253-8.406-.766l-.569-.141V5.5zm.568 12.962c1.229.29 2.275.477 3.187.59a4.005 4.005 0 0 0-3.187-3.22zm18.5-2.128c-1.264.227-2.4 1.011-2.896 2.089.943.1 1.719.25 2.328.402q.315.08.568.156zM12 10.499a3 3 0 1 0 0 6 3 3 0 0 0 0-6m6.518-3.14c.16 1.609 1.374 3.08 2.732 3.494V7.968a10 10 0 0 0-.931-.28 15 15 0 0 0-1.801-.33M2.75 10.422c1.367-.284 2.537-1.308 2.995-2.476a30 30 0 0 1-2.995-.537z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.25 4.5h1.5V8h-1.5zm3-2h1.5V8h-1.5zm3 2h1.5V8h-1.5z"
      />
    </svg>
  );
};
export default MoneyReceiveFlow_02;
