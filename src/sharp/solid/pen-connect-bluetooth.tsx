import React from "react";
const PenConnectBluetooth: React.FC<
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
        d="M4.861 1.349a.75.75 0 0 1 .753.005l3.499 2.058a.75.75 0 0 1 .102 1.221L6.398 7l2.817 2.367a.75.75 0 0 1-.102 1.22l-3.5 2.06A.75.75 0 0 1 4.484 12V8.61l-2.268 1.905-.965-1.148L4.067 7 1.25 4.633l.965-1.148L4.483 5.39V2a.75.75 0 0 1 .378-.651M5.983 8.61l1.455 1.222-1.455.855zm0-3.222V3.311l1.455.856z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.532 5.47a.75.75 0 0 0-1.06 0l-2.468 2.468 4.06 4.061 2.468-2.469a.75.75 0 0 0 0-1.06zM19.003 13.06l-4.06-4.062-9.691 9.691v4.061h4.06z"
      />
    </svg>
  );
};
export default PenConnectBluetooth;
