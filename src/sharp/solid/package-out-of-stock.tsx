import React from "react";
const PackageOutOfStock: React.FC<
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
        d="M2.25 7.5v10.487l9.445 4.198a.75.75 0 0 0 .61 0l9.445-4.198V7.5a.75.75 0 0 0-.445-.686l-4.5-2-.61 1.371L19.153 7.5 12 10.68 4.847 7.5l2.958-1.315-.61-1.37-4.5 2a.75.75 0 0 0-.445.685m3.586 6.006 2.33 1.165v-1.677l-2.33-1.165z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m10.938 4.28-1.47 1.47 1.061 1.06L12 5.342l1.47 1.47 1.06-1.061-1.47-1.47 1.47-1.47-1.06-1.06-1.47 1.47-1.47-1.47-1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageOutOfStock;
