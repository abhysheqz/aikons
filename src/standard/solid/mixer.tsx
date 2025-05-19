import React from "react";
const Mixer: React.FC<
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
        d="M13.25 15.002a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v2.516c0 2.342-1.906 4.234-4.25 4.234s-4.25-1.892-4.25-4.234zm1.5.75v1.766a2.74 2.74 0 0 0 2.75 2.734 2.74 2.74 0 0 0 2.75-2.734v-1.766z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.75 15.002v-4h1.5v4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2.25A1.75 1.75 0 0 0 1.25 4v3.5c0 .966.784 1.75 1.75 1.75h.25v11.002H2a.75.75 0 1 0 0 1.5h20a.75.75 0 0 0 0-1.5h-8.154c-1.189-.08-1.943-.608-2.414-1.236-.491-.654-.686-1.432-.686-1.96V9.25h2.577a.25.25 0 0 1 .232.157l.497 1.243c.266.664.91 1.1 1.625 1.1H19A1.75 1.75 0 0 0 20.75 10V4A1.75 1.75 0 0 0 19 2.25zm14 2.752a1 1 0 1 0 0 2 1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mixer;
