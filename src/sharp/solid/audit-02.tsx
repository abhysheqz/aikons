import React from "react";
const Audit_02: React.FC<
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
        d="M16.472 15.043a2.429 2.429 0 1 0 0 4.857 2.429 2.429 0 0 0 0-4.857m-4.429 2.428a4.428 4.428 0 1 1 8.187 2.345l1.52 1.52-1.414 1.414-1.52-1.52a4.429 4.429 0 0 1-6.773-3.758"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 1.25h17.5v11.281a5.929 5.929 0 1 0-5.98 10.219H2.25zM7 7.75h8v-1.5H7zm0 4h4v-1.5H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Audit_02;
