import React from "react";
const SchoolBell_01: React.FC<
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
        d="M10.5 1.25a8.75 8.75 0 1 0 5.298 15.714c.263-.2.395-.3.401-.44s-.134-.27-.416-.529a4.751 4.751 0 0 1 2.406-8.176c.377-.065.566-.097.637-.219.07-.121.014-.276-.1-.587A8.75 8.75 0 0 0 10.5 1.25m0 10.75a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19 9.25a3.25 3.25 0 0 0-3.25 3.253 3.252 3.252 0 0 0 3.88 3.192c-1.271 2.826-4.394 4.75-8.38 5.033v-2.965a1 1 0 0 0-2 0v3.04c0 .202 0 .447.03.658.037.261.138.609.445.897.3.28.643.363.91.384.211.018.45.002.641-.011l.04-.003c5.847-.388 10.793-4.052 10.93-9.72l.004-.004v-.5A3.25 3.25 0 0 0 19 9.25"
      />
    </svg>
  );
};
export default SchoolBell_01;
