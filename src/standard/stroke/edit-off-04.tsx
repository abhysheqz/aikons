import React from "react";
const EditOff_04: React.FC<
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
        d="m14.5 5.5 4 4M3 3l18 18M16 12l4.707-4.707a1 1 0 0 0 0-1.414l-2.586-2.586a1 1 0 0 0-1.414 0L12 8m2 6-6.707 6.707a1 1 0 0 1-.707.293H3v-3.586a1 1 0 0 1 .293-.707L10 10"
      />
    </svg>
  );
};
export default EditOff_04;
