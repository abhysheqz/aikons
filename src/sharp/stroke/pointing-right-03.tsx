import React from "react";
const PointingRight_03: React.FC<
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
        d="M16.012 4.497h5.332m-1.84-2.495L22 4.497l-2.495 2.495M9.5 11.039l1.829-2.122c.126-.147.235-.31.298-.492.288-.836.088-1.49-.612-2.048-.643-.52-1.43-.44-2.206.126L2.221 10.88c-.221.109-.225.493-.221.824v7.502c.065.891.42 1.57 1.105 2.138.613.51 1.434.655 2.231.655h4.843c.701 0 1.427-.081 1.995-.492a3.17 3.17 0 0 0 1.334-2.368v-4.601h5.826c.925-.01 1.706-.93 1.634-1.838-.01-.955-.837-1.671-1.763-1.661z"
      />
    </svg>
  );
};
export default PointingRight_03;
