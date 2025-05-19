import React from "react";
const PinCode: React.FC<
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
        fill="#D9D9D9"
        d="M8.762 12h.009zM12.757 12h.009zM16.753 12h.009z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.762 12h.009m3.986 0h.009m3.987 0h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m18.757 4.5-10.483.004a2 2 0 0 0-1.611.816L2.63 10.813a2 2 0 0 0-.001 2.366l4.033 5.503a2 2 0 0 0 1.614.817l10.484-.005a3 3 0 0 0 2.998-3V7.5a3 3 0 0 0-3-3Z"
      />
    </svg>
  );
};
export default PinCode;
