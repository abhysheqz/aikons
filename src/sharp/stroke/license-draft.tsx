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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.5 22h-8V2h17v9M7 7h8m-8 5h8M13.5 20v2h2l6-6-2-2z"
      />
    </svg>
  );
};
export default LicenseDraft;
