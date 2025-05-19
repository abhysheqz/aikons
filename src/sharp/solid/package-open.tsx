import React from "react";
const PackageOpen: React.FC<
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
        d="M2.25 8v10.487l9.445 4.198a.75.75 0 0 0 .61 0l9.445-4.198V8a.75.75 0 0 0-.445-.686l-4.5-2-.61 1.371L19.153 8 12 11.18 4.847 8l2.958-1.315-.61-1.37-4.5 2A.75.75 0 0 0 2.25 8m3.586 6.006 2.33 1.165v-1.677l-2.33-1.165z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.249 4.25v-3h1.5v3zm-2.42 1.335-1.5-3 1.34-.67 1.5 3zm5-.67 1.5-3 1.34.67-1.5 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageOpen;
