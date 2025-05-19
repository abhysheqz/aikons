import React from "react";
const LegalDocument_02: React.FC<
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
        d="M2.25 5A3.75 3.75 0 0 1 6 1.25h12A3.75 3.75 0 0 1 21.75 5v14A3.75 3.75 0 0 1 18 22.75H6A3.75 3.75 0 0 1 2.25 19zm3.5 2a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-.15l.533.858c.925 1.488-.009 3.642-1.883 3.642s-2.808-2.154-1.883-3.642l.533-.858h-1.9v5.5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-5.5h-1.9l.533.858c.925 1.488-.009 3.642-1.883 3.642s-2.808-2.154-1.883-3.642l.533-.858H6.5A.75.75 0 0 1 5.75 7m2.75 9a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LegalDocument_02;
