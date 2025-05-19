import React from "react";
const Satellite: React.FC<
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
        d="m21.75 16.463-.541.53a10.72 10.72 0 0 1-7.525 3.073c-5.937 0-10.75-4.813-10.75-10.75 0-2.93 1.172-5.587 3.073-7.525l.53-.541zM16.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.258 5.013a.75.75 0 0 1 .16.775l-1.837 5a.75.75 0 0 1-1.408-.518l1.315-3.58-3.767 1.16a.75.75 0 1 1-.441-1.434l5.213-1.604a.75.75 0 0 1 .765.201"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.375 16.889 2.31 21.705A.75.75 0 0 0 3 22.75h6a.75.75 0 0 0 .69-1.045l-.548-1.278a12.03 12.03 0 0 1-4.767-3.538"
      />
    </svg>
  );
};
export default Satellite;
