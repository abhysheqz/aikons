import React from "react";
const Moonset: React.FC<
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
        d="M18.793 9.707a1 1 0 0 0 1.414 0l2.5-2.5A1 1 0 0 0 22 5.5h-1.5V3a1 1 0 1 0-2 0v2.5H17a1 1 0 0 0-.707 1.707zM6.43 5.449a7.98 7.98 0 0 1 6.286-.923.75.75 0 0 1 .416 1.159 5.88 5.88 0 0 0-.358 6.17c1.087 1.998 3.143 2.985 5.127 2.723a.75.75 0 0 1 .823.937 9.1 9.1 0 0 1-1.363 2.919.75.75 0 0 1-.611.316H4.54a.75.75 0 0 1-.612-.317 9 9 0 0 1-.562-.903C1.074 13.316 2.418 7.908 6.431 5.45M1 21a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Moonset;
