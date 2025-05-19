import React from "react";
const Tractor: React.FC<
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
        d="M6.5 11.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M19.5 15a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.311 8.02a1 1 0 0 0-1.198.98v.232c0 .375 0 .563-.108.619s-.267-.057-.585-.283A8.46 8.46 0 0 0 6.5 8c-1.913 0-3.68.633-5.1 1.7a1 1 0 0 0 1.2 1.599 6.47 6.47 0 0 1 3.9-1.3 6.5 6.5 0 0 1 6.5 6.5q-.001.207-.01.414a6 6 0 0 0 0 .648c.057.763.564 1.317 1.329 1.412l.008.001c.194.023.292.035.36-.025.067-.06.065-.174.063-.4v-.05a4.75 4.75 0 0 1 6.696-4.334c.317.143.476.215.569.152s.085-.223.072-.543a13 13 0 0 0-.067-.902.14.14 0 0 0-.138-.122h-1.769a.75.75 0 0 1 0-1.5h.852c.29 0 .435 0 .491-.11.056-.108-.023-.217-.18-.434l-.062-.083c-.507-.658-1.17-1.03-1.95-1.298-.735-.252-1.667-.44-2.783-.665z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.262 2.029a1 1 0 0 1 1.21.733l1.325 5.414c.135.458.203.933.203 1.411V12.5a1 1 0 1 1-2 0V9.587a3 3 0 0 0-.14-.912l-1.331-5.437a1 1 0 0 1 .733-1.21M4 2a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M20 7a1 1 0 0 0-1 1v1.5a1 1 0 1 1-2 0V8a3 3 0 0 1 3-3 1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tractor;
