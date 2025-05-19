import React from "react";
const ShuffleSquare: React.FC<
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
        d="M5.5 1.75A3.75 3.75 0 0 0 1.75 5.5v13a3.75 3.75 0 0 0 3.75 3.75h13a3.75 3.75 0 0 0 3.75-3.75v-13a3.75 3.75 0 0 0-3.75-3.75zm11.1 4.3a.75.75 0 0 0-1.2.9l.6.8h-1.086c-.464 0-.909.184-1.237.513l-.707.707a.75.75 0 0 0 1.06 1.06l.707-.707a.25.25 0 0 1 .177-.073H17.5a.75.75 0 0 0 .6-1.2zM6.5 7.25a.75.75 0 0 0 0 1.5h1.52a.25.25 0 0 1 .195.094l5.4 6.75a1.75 1.75 0 0 0 1.366.656H16l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2h-2.52a.25.25 0 0 1-.195-.094l-5.4-6.75A1.75 1.75 0 0 0 8.02 7.25zm4.03 7.78a.75.75 0 0 0-1.06-1.06l-1.207 1.207a.25.25 0 0 1-.177.073H6.5a.75.75 0 0 0 0 1.5h1.586c.464 0 .909-.184 1.237-.512z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShuffleSquare;
