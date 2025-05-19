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
        d="M6.818 2.112A4.75 4.75 0 0 1 9.37 4.637c.288-.262.622-.475.99-.627.35-.146.72-.205 1.13-.233.397-.027.885-.027 1.484-.027H13a.75.75 0 0 1 .75.75v.026c0 .6 0 1.087-.027 1.484-.028.41-.087.78-.233 1.13a3.42 3.42 0 0 1-1.85 1.85c-.35.146-.72.205-1.13.233-.397.027-.885.027-1.484.027h-.053c-.91 0-1.63 0-2.213-.04-.596-.04-1.104-.125-1.578-.322a4.75 4.75 0 0 1-2.57-2.57c-.197-.474-.282-.982-.322-1.578-.04-.584-.04-1.304-.04-2.213V2.5A.75.75 0 0 1 3 1.75h.027c.91 0 1.63 0 2.213.04.596.04 1.104.125 1.578.322"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 7.5a1 1 0 0 1 1 1v4h3a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h5v-4a1 1 0 0 1 1-1m-7 9a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19 22.25a3 3 0 0 0 2.365-4.846c-.504-.645-.756-.967-.81-1.125s-.055-.366-.055-.781V10.75a1.5 1.5 0 0 0-3 0v4.748c0 .415 0 .622-.055.78-.054.159-.306.481-.81 1.126A3 3 0 0 0 19 22.25"
      />
    </svg>
  );
};
export default SoilTemperatureField;
