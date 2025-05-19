import React from "react";
const SmartphoneWifi: React.FC<
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
        d="M14.993 1c-2.097 0-4.03.775-5.624 2.071a1 1 0 0 0 1.262 1.552C11.91 3.583 13.407 3 14.993 3c1.592 0 3.093.586 4.374 1.633a1 1 0 0 0 1.266-1.55C19.036 1.78 17.098 1 14.993 1M14.993 5.2a6.1 6.1 0 0 0-3.239.942 1 1 0 1 0 1.054 1.7 4.1 4.1 0 0 1 2.185-.641 4.1 4.1 0 0 1 2.196.648 1 1 0 0 0 1.058-1.698 6.1 6.1 0 0 0-3.254-.95M15 9a1 1 0 1 0 0 2h.006a1 1 0 0 0 0-2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.06 5.425a3 3 0 0 1-.13-.175H6A2.75 2.75 0 0 0 3.25 8v12A2.75 2.75 0 0 0 6 22.75h7A2.75 2.75 0 0 0 15.75 20v-7.613a2.5 2.5 0 0 1-.744.113H15a2.5 2.5 0 0 1-2.445-3.022 2.5 2.5 0 0 1-2.688-3.134 2.5 2.5 0 0 1-1.806-.92M9.5 18a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartphoneWifi;
