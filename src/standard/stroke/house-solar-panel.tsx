import React from "react";
const HouseSolarPanel: React.FC<
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
        d="M6.999 19.75A.75.75 0 0 0 7 18.25zM17 18.25a.75.75 0 0 0 0 1.5zm-11.502.747.002-.75zM3.75 10v7.997h1.5V10zm1.747 9.747 1.502.003.002-1.5-1.501-.003zM18.75 10v8h1.5v-8zm-.25 8.25H17v1.5h1.5zm.25-.25a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 20.25 18zm-15-.003a1.75 1.75 0 0 0 1.747 1.75l.003-1.5a.25.25 0 0 1-.25-.25z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 14-3 4h4l-3.016 4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 2-1 8m5-8 1 8M4 6h16M6 2h11.963L21 10H3z"
      />
    </svg>
  );
};
export default HouseSolarPanel;
