import React from "react";
const SoftwareLicense: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v5.25h19.5V3a.75.75 0 0 0-.75-.75zm3 2h2.009v2H6zm4 0h2.009v2H10zM21.75 9.75H2.25V21c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75zM7.469 14.17l1.47 1.47-1.47 1.47 1.06 1.06 2.53-2.53-2.53-2.53zm4.53 4.22h4v-1.5h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SoftwareLicense;
