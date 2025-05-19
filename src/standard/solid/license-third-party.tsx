import React from "react";
const LicenseThirdParty: React.FC<
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
        d="M15.496 14.75a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M13.746 22c0-1.5 1.904-3.25 4.252-3.25s4.251 1.75 4.251 3.25a.75.75 0 0 1-.75.75h-7.003a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 4A2.75 2.75 0 0 1 4.5 1.25h13A2.75 2.75 0 0 1 20.25 4v7.752a3.75 3.75 0 1 0-4.332 6.12 6 6 0 0 0-1.715.97c-.943.766-1.707 1.902-1.707 3.158 0 .265.052.518.146.75H4.5A2.75 2.75 0 0 1 1.75 20zM7 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm0 5a1 1 0 0 0 0 2h6.5a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LicenseThirdParty;
