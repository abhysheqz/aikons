import React from "react";
const ValidationApproval: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 9V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 9 2 2 3.5-4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.991 18.5-2.696 1.015A2 2 0 0 0 11 21.386v.564c0 .028.022.05.05.05l10.902-.005a.05.05 0 0 0 .05-.05v-.558a2 2 0 0 0-1.296-1.872L18.003 18.5m-3.012 0h3.012m-3.012 0s-.185-1.493-.68-2.622c-.318-.826-.373-1.233-.255-1.93.257-.971 1.08-2.026 2.679-1.943.54.045 1.47.36 2.033 1.426.24.57.313 1.088.163 1.71-.17.707-.538 1.329-.666 2.004l-.262 1.355"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6 15h4M6 18h4"
      />
    </svg>
  );
};
export default ValidationApproval;
