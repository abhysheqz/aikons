import React from "react";
const CursorRemoveSelection_01: React.FC<
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
        d="M11 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.234 1.567C6.45.875 5.2 1.384 5.144 2.44L4.25 18.873c-.06 1.124 1.266 1.743 2.095 1.003l3.363-3.004 2.068 5.095c.261.643.994.95 1.635.693l1.878-.756c.644-.258.958-.99.696-1.636l-2.104-5.183 4.775-.634c1.063-.141 1.478-1.467.669-2.184L16.198 9.5H12a2.5 2.5 0 0 1-1.141-4.725z"
      />
    </svg>
  );
};
export default CursorRemoveSelection_01;
