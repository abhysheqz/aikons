import React from "react";
const BabyBoyDress: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M5.992 8v13h12V8" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 12h11.988"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m18.138 9.249 2.362 1.445a.01.01 0 0 0 .014-.006l1.484-4.373a.01.01 0 0 0-.003-.01L17.992 3h-3c0 1.592-1.335 2.881-2.99 2.881S8.992 4.591 8.992 3h-3L2.005 6.334a.01.01 0 0 0-.003.011l1.515 4.294a.01.01 0 0 0 .014.005l2.338-1.33"
      />
    </svg>
  );
};
export default BabyBoyDress;
