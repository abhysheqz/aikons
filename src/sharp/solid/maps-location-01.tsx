import React from "react";
const MapsLocation_01: React.FC<
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
        d="M16.424 22.215c.224.128.413.226.547.293l.529.241.529-.241a11.754 11.754 0 0 0 2.201-1.43c1.184-.982 2.52-2.538 2.52-4.611 0-2.882-2.35-5.218-5.25-5.218s-5.25 2.336-5.25 5.218c0 2.073 1.336 3.63 2.52 4.61.604.501 1.205.882 1.654 1.138m1.07-7.716a1.997 1.997 0 0 0-1.994 2c0 1.105.893 2 1.994 2h.012a1.997 1.997 0 0 0 1.994-2c0-1.104-.893-2-1.994-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.404 19.272 8.75 18.133V1.25l5.5 2.36v6.968a6.71 6.71 0 0 0-3.5 5.889c0 1.055.26 1.992.654 2.805M22.75 12.244V4.748a.75.75 0 0 0-.75-.75h-6.25v5.98a6.8 6.8 0 0 1 1.75-.229c2.117 0 4.011.972 5.25 2.495M1.658 4.164 7.25 1.297v16.747l-5.013 1.668A.75.75 0 0 1 1.25 19V4.831a.75.75 0 0 1 .408-.667"
      />
    </svg>
  );
};
export default MapsLocation_01;
