import React from "react";
const FilterEdit: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 4.5V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2.532a1 1 0 0 0 .36.768l5.33 4.442a1 1 0 0 1 .354.658l.798 7.174a1 1 0 0 0 1.441.784l2.239-1.12a1 1 0 0 0 .542-.752l.097-.674"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 12.5V15h2.5L22 9.5 19.5 7z"
      />
    </svg>
  );
};
export default FilterEdit;
