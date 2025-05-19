import React from "react";
const PrinterOff: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM17.75 6V1.25H6.25v1.466L9.535 6z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 7.25a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h4.25V22c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75v-3.25h.999l-11.5-11.5zm5.75 9.5v4.5h8.5v-4.5zM22.75 8v10a.75.75 0 0 1-.506.71L10.784 7.25H22a.75.75 0 0 1 .75.75M20 10h-2v2h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PrinterOff;
