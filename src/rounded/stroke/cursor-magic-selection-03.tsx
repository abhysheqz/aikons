import React from "react";
const CursorMagicSelection_03: React.FC<
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
        d="m10.465 19.007-2.444-7.023h0c-.92-2.64-1.379-3.961-.688-4.651.69-.69 2.012-.231 4.655.687l7.013 2.438c1.466.51 2.2.764 2.357 1.257.044.136.06.28.045.422-.053.516-.717.917-2.046 1.719-.851.514-1.277.77-1.391 1.159q-.048.166-.04.338c.018.404.37.755 1.076 1.456l2.32 2.305h0c.346.345.52.518.6.71.104.253.104.537 0 .79-.079.193-.252.366-.598.712-.345.345-.518.517-.711.596a1.04 1.04 0 0 1-.788 0c-.193-.079-.366-.251-.711-.596h0L16.786 19c-.694-.694-1.041-1.04-1.44-1.061a1 1 0 0 0-.356.043c-.382.116-.635.536-1.141 1.376h0c-.792 1.314-1.188 1.971-1.697 2.029a1 1 0 0 1-.445-.047c-.485-.16-.737-.885-1.242-2.334M9 4V2M5 5 3.5 3.5M4 9H2m3 4-1.5 1.5m11-11L13 5"
      />
    </svg>
  );
};
export default CursorMagicSelection_03;
