import React from "react";
const TextAllCaps: React.FC<
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
        d="m16.015 2 6 .08a1 1 0 0 1 .986 1V5.5h-2V4.066l-4-.053V20h2v2h-6v-2h2V4h-2V2zM1.002 3a1 1 0 0 1 1-1h8.997v2H8.998v16h2.001v2H5v-2h2V4H3.001v1.5h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextAllCaps;
