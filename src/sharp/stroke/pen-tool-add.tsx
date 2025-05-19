import React from "react";
const PenToolAdd: React.FC<
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
        d="m12.615 8.009 2.522-4.006 7.06 7.01-4.034 2.504"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.05 8.009V2M2.022 5.004h6.052M18.307 13.72l-5.725-5.643-7.199 3.344-1.438 10.855a.01.01 0 0 0 .011.011l10.944-1.46z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.262 17.18-1.594-1.563m0 0-1.54-1.526m1.54 1.526-6.335 6.295"
      />
    </svg>
  );
};
export default PenToolAdd;
