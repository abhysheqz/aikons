import React from "react";
const SoilTemperatureField: React.FC<
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
        d="M6.818 2.612A4.75 4.75 0 0 1 9.37 5.137c.288-.262.622-.475.99-.627.35-.146.72-.205 1.13-.233.397-.027.885-.027 1.484-.027h.776v.776c0 .6 0 1.087-.027 1.484-.028.41-.087.78-.233 1.13a3.42 3.42 0 0 1-1.85 1.85c-.35.146-.72.205-1.13.233-.909 0-3.166.027-3.75-.013-.596-.04-1.104-.125-1.578-.322a4.75 4.75 0 0 1-2.57-2.57c-.197-.474-.282-.982-.322-1.578-.04-.584-.04-1.304-.04-2.213V2.25h.777c.91 0 1.63 0 2.213.04.596.04 1.104.125 1.578.322"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 14V9h2v5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 13h10v2H3zM3 16h10v2H3zM3 19h10v2H3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.75 21.75a3 3 0 0 0 1.5-5.599V9.75h-3v6.401a2.999 2.999 0 0 0 1.5 5.599"
      />
    </svg>
  );
};
export default SoilTemperatureField;
