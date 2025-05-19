import React from "react";
const Liver: React.FC<
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
        d="M18 8.034c-2.88 0-4.873-3.023-8-3.023-4.418 0-8 3.61-8 8.063 0 1.433.171 3.138.868 4.535.546 1.097 1.813 1.555 3.013 1.34C10.43 18.13 14 15.002 15 13.004m0 0c-1.769.106-4-.5-6-1.947m6 1.947c2.83-.17 7-2.796 7-5.978s-5-2.016-8-.56"
      />
    </svg>
  );
};
export default Liver;
