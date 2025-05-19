import React from "react";
const TabletConnectedUsb: React.FC<
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
        d="M19.875 21.75a2.75 2.75 0 0 0 2.75-2.75l.004-.894a1 1 0 1 0-2 0v.647a1 1 0 0 1-1 1H6.7V4.247h12.93a1 1 0 0 1 1 1v.716a1 1 0 1 0 2 0L22.625 5a2.75 2.75 0 0 0-2.75-2.75h-16A2.75 2.75 0 0 0 1.125 5v14a2.75 2.75 0 0 0 2.75 2.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.375 9a1 1 0 0 1 1-1h.78a2 2 0 0 1 1.897 1.368l.544 1.634H16.8a1 1 0 0 1 .148 0h1.133a2.5 2.5 0 1 1 .002 2h-.49l-.542 1.63A2 2 0 0 1 15.154 16h-1.279a1 1 0 1 1 0-2h1.28l.332-.998H9.875a1 1 0 1 1 0-2h3.613L13.154 10h-.779a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TabletConnectedUsb;
