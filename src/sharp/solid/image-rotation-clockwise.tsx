import React from "react";
const ImageRotationClockwise: React.FC<
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
        d="M11.904 7.522 10.546 2.09l-1.456.364.619 2.473A5.75 5.75 0 0 0 2.4 13.45l.45.6 1.2-.901-.451-.6a4.25 4.25 0 0 1 5.984-5.925l-3.011.86.412 1.442zm-6.616.015-.038.026v14.188h17.5V6.25h-9.875l.535 2.14-7.284 2.082zm7.204 4.964v-2.01h-2v2.01zm.008 5L17 13l4.25 4.25v3H6.75v-2L10 15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageRotationClockwise;
