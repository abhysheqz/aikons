import React from "react";
const Restaurant: React.FC<
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
        d="M3 11a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-3H4v3a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1M11.106 2.33a2 2 0 0 1 1.788 0l5.534 2.766.037.019 1.982.99a1 1 0 1 1-.894 1.79L19 7.617V10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.618l-.553.276a1 1 0 0 1-.894-1.788l1.982-.991.037-.02zM21 11a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-3h-3v3a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1h4v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 14a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-4v5a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2v-5H7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Restaurant;
