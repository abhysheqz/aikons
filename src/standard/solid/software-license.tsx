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
        d="M19.499 1.752a2.75 2.75 0 0 1 2.751 2.75V7.75H1.75V4.51a2.75 2.75 0 0 1 2.749-2.75zM1.75 9.25h20.5V19.5a2.75 2.75 0 0 1-2.75 2.75h-15a2.75 2.75 0 0 1-2.75-2.75zM6.5 4a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2zm3.991 0a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2zM6.97 12.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06L8.44 15l-1.47-1.47a.75.75 0 0 1 0-1.06m5.53 3.78a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SoftwareLicense;
