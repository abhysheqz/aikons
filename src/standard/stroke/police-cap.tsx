import React from "react";
const PoliceCap: React.FC<
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
        strokeWidth={1.5}
        d="M4.142 14c-1.474 1.325-1.931 4.576 1.164 5.384 1.839.48 4.703 1.138 6.217 1.5.314.076.64.076.954 0 1.514-.362 4.378-1.02 6.217-1.5 3.095-.808 2.638-4.06 1.164-5.384"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 8 2-1 2 1c0 .5 0 2-2 3-2-1-2-2.5-2-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.972 8.615C4.505 7.293 7.752 4.77 12 3c4.249 1.77 7.495 4.293 9.028 5.615.639.55.972 1.36.972 2.203A3.18 3.18 0 0 1 18.818 14H5.182A3.18 3.18 0 0 1 2 10.818c0-.844.333-1.652.972-2.203"
      />
    </svg>
  );
};
export default PoliceCap;
