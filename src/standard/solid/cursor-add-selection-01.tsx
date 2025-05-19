import React from "react";
const CursorAddSelection_01: React.FC<
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
        d="M15 2a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0V7h-2a1 1 0 1 1 0-2h2V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.238 4.226 7.234 1.567C6.45.875 5.2 1.384 5.144 2.44L4.25 18.873c-.06 1.124 1.266 1.743 2.095 1.003l3.363-3.004 2.068 5.095c.261.643.994.95 1.635.693l1.878-.756c.644-.258.958-.99.696-1.636l-2.104-5.183 4.775-.634c1.063-.141 1.478-1.467.669-2.184l-2.202-1.948A2.5 2.5 0 0 1 12.5 9v-.499H12a2.5 2.5 0 0 1-1.762-4.274"
      />
    </svg>
  );
};
export default CursorAddSelection_01;
