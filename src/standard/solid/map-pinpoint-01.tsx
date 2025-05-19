import React from "react";
const MapPinpoint_01: React.FC<
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
        d="M17.5 11.25a5.25 5.25 0 0 0-5.25 5.25c0 1.925 1.139 3.407 2.236 4.393a11.6 11.6 0 0 0 2.613 1.748.92.92 0 0 0 .802 0 11.6 11.6 0 0 0 2.613-1.748c1.097-.986 2.236-2.468 2.236-4.393 0-2.9-2.35-5.25-5.25-5.25m0 3.25a2 2 0 1 0 0 4h.009a2 2 0 1 0 0-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m10.695 22.685-.006-.002c-.076-.036-.286-.135-.411-.198a22.78 22.78 0 0 1-4.258-2.784C3.71 17.777 1.25 14.836 1.25 11c0-5.385 4.365-9.75 9.75-9.75 5.243 0 9.52 4.139 9.741 9.328A6.7 6.7 0 0 0 17.5 9.75c-.91 0-1.777.18-2.569.506A4.001 4.001 0 0 0 7 11a4 4 0 0 0 3.918 4 6.8 6.8 0 0 0-.168 1.5c0 2.323 1.25 4.07 2.402 5.198q-.194.116-.372.218a21 21 0 0 1-1.36.716l-.112.052-.003.001a.75.75 0 0 1-.61 0"
      />
    </svg>
  );
};
export default MapPinpoint_01;
