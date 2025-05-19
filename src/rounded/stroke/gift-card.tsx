import React from "react";
const GiftCard: React.FC<
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
        d="M2 10c0-2.828 0-4.243.879-5.121C3.757 4 5.172 4 8 4h8c2.828 0 4.243 0 5.121.879C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20H8c-2.828 0-4.243 0-5.121-.879C2 18.243 2 16.828 2 14z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 9.904C6 5.36 12 9.99 12 13H8.5C6.763 13 6 11.47 6 9.904M18 9.904C18 5.36 12 9.99 12 13h3.5c1.737 0 2.5-1.53 2.5-3.096M12 4v16M2 13h20M15 16l-3-3-3 3"
      />
    </svg>
  );
};
export default GiftCard;
