import React from "react";
const TajMahal: React.FC<
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
        d="M16 22V11m-8 0v11M8.281 11C4.425 7 10.347 5 12 3c1.653 2 7.575 4 3.719 8z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.495 12c2.62-2.727-.607-3.967-1.509-5C18.604 7.438 17 8 17 8.5M19 7V6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 3V2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.506 12c-2.621-2.727.606-3.967 1.508-5C5.396 7.438 7 8 7 8.5M5 7V6M8 11l-3.674 1.347a4.9 4.9 0 0 1-1.706.303c-.385 0-.62.208-.62.62V22h20v-8.73c0-.412-.235-.62-.62-.62-.592 0-1.153-.1-1.706-.303L16 11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 18v-1M12 22v-3M5 18v-1M12 16v-1"
      />
    </svg>
  );
};
export default TajMahal;
