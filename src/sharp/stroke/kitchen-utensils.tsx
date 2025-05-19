import React from "react";
const KitchenUtensils: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.509 14.145V3m0 11.145c-1.658 0-3.002 1.454-3.002 2.659 0 1.773 1.344 4.433 3.002 4.433s3.002-2.66 3.002-4.433c0-1.205-1.344-2.66-3.002-2.66Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.49 21.997V10.081m0 0h2.016l.97-6.973a.1.1 0 0 0-.099-.116H2.611a.1.1 0 0 0-.1.116l.981 6.973zM18.576 21.993l-.08-7.855m0 0V3.008q.002-.012.013-.01c.986.35 3.042 1.248 3.375 3.935l.627 7.193a.01.01 0 0 1-.01.01z"
      />
    </svg>
  );
};
export default KitchenUtensils;
