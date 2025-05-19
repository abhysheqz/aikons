import React from "react";
const PackageSent: React.FC<
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
        d="M12.75 9.06V4.122l1.219 1.22 1.06-1.06L12 1.25 8.97 4.28l1.06 1.06 1.22-1.219v4.94z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageSent;
