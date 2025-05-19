import React from "react";
const Redo_02: React.FC<
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
        d="M2.004 12c0-5.523 4.477-10 10-10 3.27 0 6.173 1.57 7.997 3.995V2h2v8.18L13.85 8.823l.329-1.973 4.507.751A8 8 0 1 0 12.003 20h1v2h-1c-5.522 0-10-4.477-10-10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Redo_02;
