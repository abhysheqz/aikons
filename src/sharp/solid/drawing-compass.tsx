import React from "react";
const DrawingCompass: React.FC<
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
        d="M12.998 1.5v2h-2v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.248 6.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 20.03v-4h2v4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m8.478 10.393-1.904 4.993a10.4 10.4 0 0 1-2.668-2.795l-1.656 1.1a12.35 12.35 0 0 0 3.594 3.61l-1.708 4.481 1.85.718 1.623-4.257c1.356.579 2.837.898 4.391.898s3.035-.32 4.391-.898l1.624 4.257 1.85-.718-1.709-4.481a12.35 12.35 0 0 0 3.594-3.61l-1.656-1.1a10.4 10.4 0 0 1-2.668 2.795l-1.903-4.993a5.3 5.3 0 0 1-1.727 1.042l1.883 4.94a9.2 9.2 0 0 1-7.357 0l1.883-4.94a5.3 5.3 0 0 1-1.727-1.042"
      />
    </svg>
  );
};
export default DrawingCompass;
