import React from "react";
const HoldLocked_01: React.FC<
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
        d="M15.75 15.5a2.25 2.25 0 0 1 4.5 0v.75H21a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75h.75zm3 .75h-1.5v-.75a.75.75 0 0 1 1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.092 11.95a.45.45 0 0 1-.45-.45V3.267a1.267 1.267 0 0 0-2.534 0V11.5a.45.45 0 0 1-.9 0V5.104a1.104 1.104 0 0 0-2.208 0V13.5l-2.132-2.081a1.736 1.736 0 0 0-2.487.234 1.74 1.74 0 0 0 .008 2.183L8 20.5v1.253a1 1 0 0 0 1 1h3.88a2.3 2.3 0 0 1-.13-.753v-5c0-1 .652-1.848 1.555-2.14a3.76 3.76 0 0 1 2.686-2.973V5.225a1.225 1.225 0 1 0-2.45 0V11.5a.45.45 0 0 1-.45.45M17.892 11.752 18 11.75c.735 0 1.421.212 2 .577V7.054a1.054 1.054 0 0 0-2.108 0z"
      />
    </svg>
  );
};
export default HoldLocked_01;
