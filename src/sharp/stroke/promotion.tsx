import React from "react";
const Promotion: React.FC<
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
        d="M7.5 12.5v-6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m7.952 13.04 1.998 3.978 2.961 1.922a.1.1 0 0 1 .016.155l-2.904 2.88a.1.1 0 0 1-.148-.006l-2.9-3.457V13.04M3 6.524h4.507l10.398-4.51a.1.1 0 0 1 .11.02c1.801 1.797 2.74 3.913 2.985 6.971 0 3.9-1.013 5.967-3.017 8.018l-10.476-4.52H3z"
      />
    </svg>
  );
};
export default Promotion;
