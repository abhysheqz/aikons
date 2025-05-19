import React from "react";
const Sword_02: React.FC<
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
        strokeWidth={1.5}
        d="M5.06 21.06a1.5 1.5 0 1 1-2.12-2.121 1.5 1.5 0 0 1 2.12 2.122Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 16-2.5 2.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.5 16.5 10.573-9.297c.278-.24.471-.562.554-.92L21.5 2.5l-3.783.873c-.358.083-.68.276-.92.554L7.5 14.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 13h.572a2 2 0 0 1 1.414.586l4.428 4.428A2 2 0 0 1 11 19.428V20"
      />
    </svg>
  );
};
export default Sword_02;
