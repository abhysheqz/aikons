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
        d="M1.75 1.25h18.5v11.293l-1.06-1.06-7.69 7.689v3.578H1.75zM16 6H6v2h10zm-2 5H6v2h8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.81 22.75h-3.06v-3.06l6.44-6.44 3.06 3.06z"
      />
    </svg>
  );
};
export default LicenseDraft;
