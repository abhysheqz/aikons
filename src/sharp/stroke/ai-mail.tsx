import React from "react";
const AiMail: React.FC<
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
        strokeWidth={1.5}
        d="m2 10.048 10 5.534 10-5.534"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M5 11.667V2h14v9.667" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.825 7.03 2 9.879v12.097c0 .055.17 0 .224 0h19.677c.055 0 .099.055.099 0V9.807L19.218 7.03"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m7.74 10.6 2.527-6.226 2.526 6.226M8.704 8.36h3.236m3.037-4.253V10.6"
      />
    </svg>
  );
};
export default AiMail;
