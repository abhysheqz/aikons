import React from "react";
const CameraNightMode_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.12 17c-2 0-3.62-1.58-3.62-3.53 0-1.727 1.273-3.165 2.954-3.47a3.4 3.4 0 0 0-.24 1.264c0 1.95 1.621 3.53 3.62 3.53q.342 0 .666-.06C14.979 16.06 13.662 17 12.12 17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6h3.5l.772-2.316A1 1 0 0 1 9.221 3h5.558a1 1 0 0 1 .949.684L16.5 6H20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2"
      />
    </svg>
  );
};
export default CameraNightMode_02;
