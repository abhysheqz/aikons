import React from "react";
const EaseInControlPoint: React.FC<
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
        d="M20.916 3.4a1 1 0 0 0-.515-1.316l-1.317.515V2.6l-.003.007-.014.03a17 17 0 0 1-.288.613 39 39 0 0 1-.92 1.767 41 41 0 0 1-3.522 5.367C11.251 14.334 7.011 18 2 18a1 1 0 1 0 0 2c5.99 0 10.749-4.334 13.913-8.384a43 43 0 0 0 3.697-5.633 41 41 0 0 0 1.217-2.385l.065-.143.017-.038.005-.011zM20 3l.916.4zm0 13a3 3 0 0 0-2.83 2H16a1 1 0 1 0 0 2h1.17A3.001 3.001 0 1 0 20 16m-9 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EaseInControlPoint;
