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
      <circle
        cx={6.5}
        cy={16.5}
        r={4.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={19}
        cy={18}
        r={3}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 10.5a7.5 7.5 0 0 1 11.995 6.287c-.023.604-.034.907.113 1.06s.42.153.965.153H16M13 9l3.106.582c2.34.44 3.511.659 4.202 1.492.692.833.692 2.03.692 4.426M20 12h-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 12.5V9.587q0-.587-.169-1.15L11.5 3M4 9V3M3 3h10M18 9.5V8a2 2 0 0 1 2-2M7 9V3"
      />
    </svg>
  );
};
export default Tractor;
