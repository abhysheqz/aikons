import React from "react";
const StepOut: React.FC<
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
        d="M17.432 9.865a.75.75 0 0 0 1.058.078l1.875-1.617c.356-.306.68-.585.907-.841.245-.277.478-.636.478-1.11s-.233-.833-.479-1.11c-.227-.256-.55-.535-.906-.841L18.49 2.807a.75.75 0 0 0-1.24.568V5.4c-.658.021-1.247.06-1.772.13-1.2.162-2.211.507-3.014 1.31-.802.802-1.147 1.813-1.309 3.013C11 11.009 11 12.478 11 14.302v3.073a1 1 0 1 0 2 0v-3c0-1.914.002-3.249.137-4.256.132-.978.373-1.496.742-1.865.369-.37.887-.61 1.865-.741.434-.059.93-.092 1.506-.112v1.975c0 .173.06.347.182.489"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 20.375a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M14 20.375a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StepOut;
