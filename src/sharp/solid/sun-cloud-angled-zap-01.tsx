import React from "react";
const SunCloudAngledZap_01: React.FC<
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
        d="m11.718 14.229 1.72 1.02-1.182 1.99h3l-2.975 5.01-1.72-1.02 1.182-1.99h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.683 9.702A4.6 4.6 0 0 1 1.25 6.359 4.6 4.6 0 0 1 5.846 1.75c1.393 0 2.64.622 3.48 1.6a6.25 6.25 0 0 1 8.92 5.454 5.251 5.251 0 0 1-.746 10.446h-1.694l2.085-3.51h-3l.601-1.014-4.299-2.553L6.99 19.25a5.75 5.75 0 0 1-4.307-9.548m.465-3.343c0-1.5 1.21-2.711 2.698-2.711.737 0 1.405.296 1.894.78a6.24 6.24 0 0 0-1.887 3.437c-.597.12-1.16.334-1.675.624a2.71 2.71 0 0 1-1.03-2.13"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloudAngledZap_01;
