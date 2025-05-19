import React from "react";
const Audit_01: React.FC<
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
        d="M2.25 4A2.75 2.75 0 0 1 5 1.25h12A2.75 2.75 0 0 1 19.75 4v8.456a6 6 0 1 0-6.157 10.294H5A2.75 2.75 0 0 1 2.25 20zM7.5 6.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M12 17.5a4.5 4.5 0 1 1 8.31 2.396l1.397 1.397a1 1 0 0 1-1.414 1.414l-1.397-1.397A4.5 4.5 0 0 1 12 17.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Audit_01;
