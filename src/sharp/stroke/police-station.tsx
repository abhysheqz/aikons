import React from "react";
const PoliceStation: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.007 7.019h2.001v15.055H6.002V7.02h2.001M12.005 22.075V18.06M9.004 15.048h2m4.003 0h-2.001"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.958 4.015c-1.434.073-3.188-.723-3.84-1.88-.043-.077-.163-.077-.206 0-.654 1.155-2.428 1.94-3.877 1.88-.386 3.06 1.562 6.313 3.973 7.025 2.412-.712 4.336-3.964 3.95-7.025ZM17.87 12.009h4.133v10.038h-4.03M6.14 12.009H2.008v10.038h4.029"
      />
    </svg>
  );
};
export default PoliceStation;
