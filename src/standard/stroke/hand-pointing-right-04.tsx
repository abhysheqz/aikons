import React from "react";
const HandPointingRight_04: React.FC<
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
        d="M11.645 14H13.5a1.5 1.5 0 0 0 1.5-1.5V11m-4 6h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.267M15 11h-2.421M15 11h5a1.5 1.5 0 0 0 0-3h-5m-2 9.324V18.5a1.5 1.5 0 0 1-1.5 1.5h-6a3 3 0 0 1-3-3V9.606a3 3 0 0 1 1.336-2.497l3.908-2.605A3 3 0 0 1 9.408 4h.35a3 3 0 0 1 2.12.879L15 8m-5 0h5"
      />
    </svg>
  );
};
export default HandPointingRight_04;
