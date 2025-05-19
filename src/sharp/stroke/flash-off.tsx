import React from "react";
const FlashOff: React.FC<
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
        d="m2 2.43 20 18.966M9.891 6.887l4.14-4.487v8.085h5.01l-2.17 3.12m-1.318 1.552-5.039 6.216v-8.476H4.97l3.551-4.36"
      />
    </svg>
  );
};
export default FlashOff;
