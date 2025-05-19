import React from "react";
const Lamp_01: React.FC<
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
        d="M13 2a1 1 0 1 0-2 0v4.07A7.005 7.005 0 0 0 5.07 12H5a1 1 0 1 0 0 2h3.126a4.002 4.002 0 0 0 7.748 0H19a1 1 0 1 0 0-2h-.07A7 7 0 0 0 13 6.07zm-1 13a2 2 0 0 1-1.732-1h3.464A2 2 0 0 1 12 15m-2.4 4.8a1 1 0 0 0-1.2-1.6l-2 1.5a1 1 0 1 0 1.2 1.6zm6-1.6a1 1 0 0 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6zM13 20a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Lamp_01;
