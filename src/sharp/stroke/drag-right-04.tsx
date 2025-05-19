import React from "react";
const DragRight_04: React.FC<
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
        d="M13.565 13.94v-1.63q0-.225-.075-.424m0 0a1.32 1.32 0 0 0-1.245-.849h-1.399m2.644.849h1.474c.575 0 1.064.354 1.245.848m.075 1.675v-1.25a1.2 1.2 0 0 0-.075-.425m0 0h1.474c.729 0 1.32.57 1.32 1.273v5.515c0 1.406-1.182 2.546-2.64 2.546H8.128l-3.772-6.209a1.5 1.5 0 0 1 .029-1.85 1.54 1.54 0 0 1 2.275-.125l1.468 1.451V6.437c0-.74.609-1.34 1.36-1.34.75 0 1.36.6 1.36 1.34v4.6m0 0v2.054"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.091 9.834c-1.246-.533-2.79-1.91-2.496-4.278C5.852 3.48 7.63 2.07 9.705 2.07c1.73.07 3.456 1.281 3.81 3.502v.537h6.537M17.52 3.613l2.471 2.496-2.483 2.49"
      />
    </svg>
  );
};
export default DragRight_04;
