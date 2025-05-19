import React from "react";
const WashingtonMonument: React.FC<
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
        d="M4.06 19.433a1.75 1.75 0 0 1 1.66-1.197h12.56a1.75 1.75 0 0 1 1.66 1.197l.6 1.8H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.46z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.576 1.521a.76.76 0 0 0-1.154 0L8.43 5.012a.8.8 0 0 0-.138.238h7.414a.8.8 0 0 0-.137-.238zM6.547 16.937 8.056 6.75h7.887l1.509 10.186h-4.453v-3.935a1 1 0 1 0-2 0v3.935z"
      />
    </svg>
  );
};
export default WashingtonMonument;
