import React from "react";
const Taxes: React.FC<
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
        d="M21.707 14.293a1 1 0 0 1 0 1.414l-7 6.996a1 1 0 0 1-1.414-1.414l7-6.996a1 1 0 0 1 1.414 0M13.25 15.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M18.75 21.246a1.5 1.5 0 1 1 2.999.001 1.5 1.5 0 0 1-2.999 0M2.47 18.47a.75.75 0 0 1 .53-.22h8a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .22-.53M12.364 1.344a.75.75 0 0 0-.728 0l-9 5A.75.75 0 0 0 2.25 7v2.995c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.386-.656zM11.996 6a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M4.25 17.166v-5.337l5.5.004v5.333z" />
    </svg>
  );
};
export default Taxes;
