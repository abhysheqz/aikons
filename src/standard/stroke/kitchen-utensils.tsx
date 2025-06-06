import React from "react";
const KitchenUtensils: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.502 14V3m0 11C10.844 14 9.5 15.435 9.5 16.625c0 1.75 1.344 4.375 3.002 4.375s3.002-2.625 3.002-4.375c0-1.19-1.344-2.625-3.002-2.625M5.5 10v11m-3-18 .877 6.141a1 1 0 0 0 .99.859h2.266a1 1 0 0 0 .99-.859L8.5 3zM18.5 21v-7m0 0V3a4.88 4.88 0 0 1 3.315 4.147L22.5 14z"
      />
    </svg>
  );
};
export default KitchenUtensils;
