import React from "react";
const BluetoothSearch: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20.358 19.397 1.64 1.605m-.82-4.414c0-1.995-1.652-3.612-3.69-3.612s-3.69 1.617-3.69 3.612c0 1.994 1.652 3.611 3.69 3.611s3.69-1.617 3.69-3.611Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2.001 6.438 6.165 5.022m.03.02 6.08-4.909a.1.1 0 0 0-.012-.165L8.301 3.013c-.069-.04-.154.01-.154.086v8.165c0 .084-.017.268.05.215Zm0 0 3.046 2.516M8.197 11.48c-.067-.054-.05-.034-.05.051m0 0v8.379c0 .078.087.126.155.085l2.716-1.613m-2.871-6.85-6.132 4.957"
      />
    </svg>
  );
};
export default BluetoothSearch;
