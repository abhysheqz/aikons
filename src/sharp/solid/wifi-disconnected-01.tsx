import React from "react";
const WifiDisconnected_01: React.FC<
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
        d="M12 3.5c3.457 0 6.869 1.276 10 3.75l-1.418 1.425C17.802 6.534 14.879 5.5 12 5.5S6.197 6.534 3.418 8.675L2 7.25C5.13 4.776 8.543 3.5 12 3.5M9.486 14.773l-1.421-1.428C9.189 12.448 10.595 12 12 12v2c-.891 0-1.783.258-2.514.773"
      />
      <path
        fill="currentColor"
        d="m6.63 11.902-1.42-1.426c4.183-3.285 9.58-3.315 13.587-.008l-1.415 1.422c-3.176-2.512-7.357-2.533-10.752.012"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.707 16.793 21 19.086 19.586 20.5l-2.293-2.293L15 20.5l-1.414-1.414 2.293-2.293-2.293-2.293L15 13.086l2.293 2.293 2.293-2.293L21 14.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiDisconnected_01;
