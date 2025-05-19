import React from "react";
const MoneySendSquare: React.FC<
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
        d="M11 8.14a3.2 3.2 0 0 0-1.015.5C9.435 9.052 9 9.7 9 10.5s.434 1.447.985 1.86c.552.414 1.267.64 2.015.64.357 0 .641.11.814.24.172.129.186.231.186.26s-.014.131-.186.26c-.173.13-.457.24-.814.24-.601 0-.917-.289-.982-.426l-1.81.852c.342.724 1.021 1.21 1.792 1.432v.642h2v-.64a3.2 3.2 0 0 0 1.014-.5c.551-.413.986-1.06.986-1.86s-.435-1.447-.986-1.86S12.747 11 12 11c-.357 0-.642-.11-.815-.24-.172-.129-.185-.231-.185-.26s.013-.131.185-.26c.173-.13.458-.24.815-.24.6 0 .916.289.981.426l1.81-.852C14.448 8.85 13.77 8.364 13 8.14V7.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 2.5a1 1 0 0 1 1-1h11v2h-10v17h17v-10h2v11a1 1 0 0 1-1 1h-19a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.085 3.5h-2.082v-2H22.5V7h-2V4.914l-3.288 3.289-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneySendSquare;
