import React from "react";
const PinCode: React.FC<
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
        d="M22.508 7.5a3.75 3.75 0 0 0-3.751-3.75l-10.483.004a2.75 2.75 0 0 0-2.216 1.122L2.025 10.37a2.75 2.75 0 0 0-.001 3.253l4.033 5.502a2.75 2.75 0 0 0 2.22 1.124l10.483-.005a3.75 3.75 0 0 0 3.748-3.75zM8.762 10.75a1.25 1.25 0 0 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zm3.995 0a1.25 1.25 0 0 0 0 2.5h.009a1.25 1.25 0 0 0 0-2.5zm3.996 0a1.25 1.25 0 0 0 0 2.5h.009a1.25 1.25 0 0 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PinCode;
