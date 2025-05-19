import React from "react";
const Svg_02: React.FC<
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
        d="M16.75 14a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 .75.75v1a.75.75 0 1 1-1.5 0v-.25h-2v3.5h2v-.5H20a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75zM6.75 14a.75.75 0 0 1 .75-.75H10a.75.75 0 0 1 0 1.5H8.25v1H10a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1 0-1.5h1.75v-1H7.5a.75.75 0 0 1-.75-.75zM11.785 13.282a.75.75 0 0 1 .933.502l1.032 3.44 1.032-3.44a.75.75 0 0 1 1.436.431l-1.5 5a.75.75 0 0 1-.718.535h-.5a.75.75 0 0 1-.718-.535l-1.5-5a.75.75 0 0 1 .502-.933"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.274 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.218-.72 2.67-1.75H7.5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h12.25V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H5.168A2.924 2.924 0 0 0 2.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Svg_02;
