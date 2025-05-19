import React from "react";
const Twitch: React.FC<
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
        d="M3.659 3.152c.659-.652 1.72-.652 3.84-.652h9c2.122 0 3.183 0 3.842.652S21 4.854 21 6.954v4.836c0 .91 0 1.365-.171 1.774s-.497.731-1.147 1.375l-.739.731c-.65.644-.976.966-1.389 1.135s-.873.17-1.793.17h-4.345c-.266 0-.399 0-.514.055-.116.054-.199.157-.365.362l-2.159 2.671c-.833 1.032-1.25 1.548-1.627 1.417-.376-.13-.376-.791-.376-2.112v-1.725c0-.104 0-.155-.007-.199a.56.56 0 0 0-.468-.462c-.043-.007-.096-.007-.2-.007-.418 0-.627 0-.802-.028a2.24 2.24 0 0 1-1.87-1.85C3 14.922 3 14.716 3 14.301V6.954c0-2.1 0-3.15.659-3.802m9.34 4.348a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Twitch;
