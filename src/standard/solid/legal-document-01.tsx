import React from "react";
const LegalDocument_01: React.FC<
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
        d="M2.25 5A3.75 3.75 0 0 1 6 1.25h12A3.75 3.75 0 0 1 21.75 5v14A3.75 3.75 0 0 1 18 22.75H6A3.75 3.75 0 0 1 2.25 19zm9.043.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.415l-2.5 2.5a1 1 0 0 1-1.414 0L11.5 11.915l-2.293 2.292a1 1 0 0 1-1.414-1.414l2.293-2.293-1.293-1.293a1 1 0 0 1 0-1.414zM8.5 17a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LegalDocument_01;
