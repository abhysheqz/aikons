import React from "react";
const LookRight: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12q0 .592-.063 1.168l-1.468.636c-.785.295-1.228.446-2.219.446-1.536 0-2.83-.373-3.584-.875a.75.75 0 0 0-.832 1.249c1.071.712 2.682 1.126 4.416 1.126 1.254 0 1.89-.22 2.764-.548l.034-.014.541-.235C21.056 19.456 16.913 22.75 12 22.75 6.063 22.75 1.25 17.937 1.25 12m13.5-3c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 0 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LookRight;
