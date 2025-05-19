import React from "react";
const AiLock: React.FC<
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
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m8.61 16.55 1.627-4.021 1.66 4.021m-3.288 0-.925 2.235m.925-2.235h3.288m0 0 .893 2.235m2.16-6.512v6.512"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.5 8.964V6.342a4.34 4.34 0 0 1 4.34-4.34h.307a4.34 4.34 0 0 1 4.34 4.34v2.622M4 8.964h16v13.034H4z"
      />
    </svg>
  );
};
export default AiLock;
