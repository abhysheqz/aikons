import React from "react";
const DeliverySent_02: React.FC<
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
        d="M20.165 18.32a3.42 3.42 0 0 1-3.279 2.43 3.42 3.42 0 0 1-3.278-2.43h-3.215a3.42 3.42 0 0 1-3.28 2.43 3.42 3.42 0 0 1-3.278-2.43H1.25V3.25h14.66v2.43h3.454l3.386 5.053v7.586zm-3.278-4.376c-.34 0-.668.05-.977.141v-6.46h2.408l2.478 3.697v5.053h-.63a3.42 3.42 0 0 0-3.28-2.43M5.648 17.347c0-.805.657-1.458 1.466-1.458.81 0 1.466.653 1.466 1.458 0 .806-.656 1.459-1.466 1.459s-1.466-.653-1.466-1.459m11.239-1.458c-.81 0-1.466.653-1.466 1.458 0 .806.656 1.459 1.466 1.459s1.466-.653 1.466-1.459c0-.805-.657-1.458-1.466-1.458m-7.549-3.34 3.26-3.048-3.26-3.048L8.314 7.55 9.599 8.75H5v1.5h4.6l-1.285 1.202z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliverySent_02;
