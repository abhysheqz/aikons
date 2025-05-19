import React from "react";
const Yurt: React.FC<
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
        d="M11.584 1.376a.75.75 0 0 1 .832 0l9 6A.75.75 0 0 1 21 8.75H3a.75.75 0 0 1-.416-1.374z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 22.75H2v-1.5h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m2.894 9.997-.127.32-.437 3.933h5.92V12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v2.25h5.923l-.437-3.934-.128-.319-.107.003H3q-.054 0-.107-.003"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.767 19.684 2.33 15.75h5.92V22h1.5v-9.25h4.5V22h1.5v-6.25h5.923l-.437 3.934-1.223 3.066H3.99zm9.992-5.434H11.25v1.5h1.509z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Yurt;
