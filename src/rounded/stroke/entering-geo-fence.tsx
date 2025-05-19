import React from "react";
const EnteringGeoFence: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17V3m0 14c.373 0 .673-.343 1.273-1.028L15 14m-3 3c-.373 0-.673-.343-1.273-1.028L9 14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5 15c-1.25.633-2 1.438-2 2.316C3 19.35 7.03 21 12 21s9-1.65 9-3.684c0-.878-.75-1.683-2-2.316"
      />
    </svg>
  );
};
export default EnteringGeoFence;
