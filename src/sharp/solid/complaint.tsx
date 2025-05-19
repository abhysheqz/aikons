import React from "react";
const Complaint: React.FC<
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
        d="M4 12.25a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M3.124 18.35a6.78 6.78 0 0 1 4.376-1.6c1.707 0 3.252.643 4.376 1.6 1.114.95 1.874 2.27 1.874 3.65a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75c0-1.38.76-2.7 1.874-3.65"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 1.25a5.75 5.75 0 0 0-3.866 10.006c-.101.486-.292.84-.664 1.214a.75.75 0 0 0 .53 1.28c.272 0 .546-.069.785-.148.246-.082.506-.192.76-.31.257-.118 1.328-.653 1.328-.653q.548.11 1.127.111a5.75 5.75 0 0 0 0-11.5m.758 5.748-.008-3-1.5.004.008 3zm0 1.252H16.25v1.5h1.508z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Complaint;
