import React from "react";
const VideoOff: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.252 3.889c.876-.255 1.663.19 2.133.654l13.08 12.923a.75.75 0 0 1 .198.72A2.75 2.75 0 0 1 16 20.25H4a2.75 2.75 0 0 1-2.75-2.75v-11c0-1.214.755-2.248 2.002-2.611M8.457 4.5a1 1 0 0 1 1-1h6.544a3 3 0 0 1 3 3v6.53a1 1 0 1 1-2 0V6.5a1 1 0 0 0-1-1H9.457a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.485 5.625A1 1 0 0 1 23 6.5v9.894a1 1 0 1 1-2 0v-8.09l-2.47 1.544a1 1 0 0 1-1.06-1.696l4-2.5a1 1 0 0 1 1.015-.027"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VideoOff;
