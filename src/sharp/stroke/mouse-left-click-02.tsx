import React from "react";
const MouseLeftClick_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.004 2v9M6.01 7.5a2.5 2.5 0 1 0-.002-4.998A2.5 2.5 0 0 0 6.01 7.5ZM20.512 11c0 1.732-.122 4.432-.253 6.089-.19 2.392-2.082 4.422-4.521 4.723-.897.11-1.81.188-2.733.188-.925 0-1.836-.078-2.733-.188-2.44-.3-4.332-2.332-4.522-4.723-.114-1.445-.318-4.18-.22-6.089m14.982 0c0-1.732-.122-2.431-.253-4.089-.19-2.391-2.082-4.422-4.521-4.723A22 22 0 0 0 13.005 2c-.925 0-1.108-.01-2.005.1m9.512 8.9H5.53m-.005-.743q0 .335.005.743"
      />
    </svg>
  );
};
export default MouseLeftClick_02;
