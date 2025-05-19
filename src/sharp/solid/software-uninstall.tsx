import React from "react";
const SoftwareUninstall: React.FC<
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
        d="M2.25 10a8.75 8.75 0 1 1 16.209 4.577l-2.146-.324A6.77 6.77 0 0 0 17.805 10c0-1.529-.503-2.94-1.354-4.076l-1.36 1.36-1.376-1.374 1.36-1.36a6.806 6.806 0 0 0-9.39 9.704L4.17 15.468A8.72 8.72 0 0 1 2.25 10"
      />
      <path fill="currentColor" d="M9 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.129 19.543-1.793 1.793 1.414 1.414 1.793-1.793 1.793 1.793 1.414-1.414-1.793-1.793 1.793-1.793-1.414-1.414-1.793 1.793-1.793-1.793-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 15a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75v.154l-1.207 1.207-1.793-1.793-3.182 3.182 1.793 1.793-1.793 1.793 1.414 1.414H2a.75.75 0 0 1-.75-.75zM13 19.5H9v-2h4z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M19.518 22.75h.05l-.025-.025z" />
    </svg>
  );
};
export default SoftwareUninstall;
