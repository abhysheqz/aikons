import React from "react";
const Earth: React.FC<
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
        d="M12 22C6.477 22 2 17.523 2 12a9.97 9.97 0 0 1 2.99-7.132M12 22c-.963-.714-.81-1.544-.326-2.375.743-1.278.743-1.278.743-2.98 0-1.704 1.012-2.502 4.583-1.788 1.605.321 2.774-1.896 4.857-1.164M12 22c4.946 0 9.053-3.59 9.857-8.307m0 0Q22 12.867 22 12c0-4.881-3.498-8.946-8.123-9.824m0 0c.51.94.305 2.06-.774 2.487-1.76.697-.5 1.98-2 2.773-1 .528-2.499.396-3.998-1.189-.79-.834-1.265-1.29-2.115-1.379m8.887-2.692A10 10 0 0 0 12 2a9.97 9.97 0 0 0-7.01 2.868"
      />
    </svg>
  );
};
export default Earth;
