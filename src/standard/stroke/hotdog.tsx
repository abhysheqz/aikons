import React from "react";
const Hotdog: React.FC<
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
        strokeWidth={1.5}
        d="M19 11c.536-.582 1.5-1.378 2.463-2.625.648-.84.7-2.025.206-2.966-.91-1.731-3.194-1.856-4.508-.435-.337.295-.132.137-.661.526M6.933 18.419q-1.091.33-2.156.54c-.986.198-1.947-.345-2.442-1.286-.91-1.731.134-3.967 1.912-4.507.429-.13.32-.009.753-.166"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.413 11.672a32 32 0 0 1-3.578 2.364 32 32 0 0 1-3.864 1.873c-1.624.655-2.478 2.509-1.65 3.922a2.395 2.395 0 0 0 2.868 1.03 31.6 31.6 0 0 0 5.243-2.39 31.4 31.4 0 0 0 4.722-3.282 2.324 2.324 0 0 0 .528-2.965c-.827-1.413-2.882-1.61-4.269-.552M5 13c-.5 0-1.333-.535-1.68-1.129-.827-1.42.027-3.281 1.65-3.94A32 32 0 0 0 8.836 6.05a32 32 0 0 0 3.578-2.375c1.387-1.063 3.442-.865 4.27.555.143.245.27.51.317.78"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 12s.468-.491.738-1.517c.507-1.924 1.562-.214 2.762-.918s.8-1.731 2-2.435c.8-.47 1.5.487 2.5.487"
      />
    </svg>
  );
};
export default Hotdog;
