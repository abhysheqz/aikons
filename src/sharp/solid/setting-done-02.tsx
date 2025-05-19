import React from "react";
const SettingDone_02: React.FC<
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
        d="M22.75 16.75a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-5.407 2.562 2.983-3.582-1.152-.96-2.015 2.419-.923-.784-.97 1.144z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.363 1.348a.75.75 0 0 1 1.017.272c1.175 2 4.067 2 5.241 0a.75.75 0 0 1 1.017-.272l3.464 1.967a.75.75 0 0 1 .277 1.031c-1.139 1.94.316 4.437 2.621 4.437a.75.75 0 0 1 .75.75v3.063a6.49 6.49 0 0 0-5-2.346c-.827 0-1.618.154-2.345.436a3.501 3.501 0 1 0-3.907 4.278 6.5 6.5 0 0 0-.248 1.786c0 1.134.29 2.2.801 3.129a3.01 3.01 0 0 0-2.672 1.5.75.75 0 0 1-1.017.273l-3.464-1.967a.75.75 0 0 1-.277-1.032C5.76 16.714 4.305 14.217 2 14.217a.75.75 0 0 1-.75-.75V9.533a.75.75 0 0 1 .75-.75c2.306 0 3.761-2.498 2.623-4.437a.75.75 0 0 1 .276-1.032z"
      />
    </svg>
  );
};
export default SettingDone_02;
