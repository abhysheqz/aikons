import React from "react";
const AudioBook_04: React.FC<
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
        d="M12 2.75c-4.015 0-7.25 3.201-7.25 7.125v.375H6a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.378-.102A4.8 4.8 0 0 1 1.25 14.5c0-1.611.79-3.038 2-3.906v-.719C3.25 5.1 7.179 1.25 12 1.25s8.75 3.85 8.75 8.625v.719c1.21.868 2 2.295 2 3.906 0 1.77-.953 3.319-2.372 4.148a.75.75 0 0 1-.378.102h-2a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 .75-.75h1.25v-.375c0-3.924-3.235-7.125-7.25-7.125"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.547 11.38a.75.75 0 0 1 .655-.125L12 12.874l5.798-1.62a.75.75 0 0 1 .952.723v9.086L12 22.75l-6.75-1.687v-9.086a.75.75 0 0 1 .297-.598m5.703 2.842-4.5-1.257v6.926l4.5 1.125zm1.5 6.794 4.5-1.125v-6.926l-4.5 1.257z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AudioBook_04;
