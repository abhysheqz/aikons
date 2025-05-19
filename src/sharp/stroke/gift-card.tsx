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
        d="M22 4H2v16h20z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 9.904C6 5.36 12 9.99 12 13H8.5C6.763 13 6 11.47 6 9.904M18 9.904C18 5.36 12 9.99 12 13h3.5c1.737 0 2.5-1.53 2.5-3.096"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4v16M2 13h20M15 16l-3-3-3 3"
      />
    </svg>
  );
};
export default GiftCard;
