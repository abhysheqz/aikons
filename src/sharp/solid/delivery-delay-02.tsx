import React from "react";
const DeliveryDelay_02: React.FC<
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
        d="M1.25 10.743v9.576h2.585a3.42 3.42 0 0 0 3.279 2.431 3.42 3.42 0 0 0 3.279-2.43h3.215a3.42 3.42 0 0 0 3.278 2.43 3.42 3.42 0 0 0 3.28-2.43h2.584v-7.587l-3.386-5.052h-3.455V5.25h-2.775q.115.609.116 1.25a6.75 6.75 0 0 1-12 4.243m15.637 5.201c-.34 0-.668.05-.977.141v-6.46h2.408l2.478 3.697v5.053h-.63a3.42 3.42 0 0 0-3.28-2.43M5.648 19.347c0-.805.657-1.458 1.466-1.458.81 0 1.466.653 1.466 1.458 0 .806-.656 1.459-1.466 1.459s-1.466-.653-1.466-1.459m11.239-1.458c-.81 0-1.466.653-1.466 1.458 0 .806.656 1.459 1.466 1.459s1.466-.653 1.466-1.459c0-.805-.657-1.458-1.466-1.458"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 1.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M7.25 4v2.56l1.18.826-.86 1.228L5.75 7.34V4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliveryDelay_02;
