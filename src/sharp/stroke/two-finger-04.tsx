import React from "react";
const TwoFinger_04: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.697 5.155v6.84m0-6.84c0-.856-.447-1.678-1.537-1.678-.849 0-1.548.587-1.548 1.684v4.827m3.085-4.833.038-1.678c0-.855.68-1.47 1.53-1.47.849 0 1.516.671 1.516 1.537v8.944m.11-2.487s1.894-.33 2.583.465c.168.227.275.433.341.635m0 0c.189.576.048 1.128.048 2.066m-.048-2.066-.056.015m.056-.015c.258-.065 1.347-.303 2.234.075.44.188.805.567.89 1.039.256 1.42-.006 4.78.04 6.37.11 3.844-3.505 3.404-3.905 3.403-.4-.002-7.904 0-7.904 0-4.754-7.293-5.968-7.12-.558-12m0 4.51v-4.51"
      />
    </svg>
  );
};
export default TwoFinger_04;
