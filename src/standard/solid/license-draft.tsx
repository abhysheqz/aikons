import React from "react";
const LicenseDraft: React.FC<
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
        d="M1.5 4a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v7.984a2.25 2.25 0 0 0-2.591.425l-6 6A2.25 2.25 0 0 0 11.25 20v3H4.5a3 3 0 0 1-3-3zM7 5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.793 13.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-6 6A1 1 0 0 1 15.5 23h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 .293-.707z"
      />
    </svg>
  );
};
export default LicenseDraft;
