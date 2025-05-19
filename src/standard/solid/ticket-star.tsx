import React from "react";
const TicketStar: React.FC<
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
        d="M4 3.25A2.75 2.75 0 0 0 1.25 6v3.5c0 .414.336.75.75.75a1.75 1.75 0 1 1 0 3.5.75.75 0 0 0-.75.75V18A2.75 2.75 0 0 0 4 20.75h16c1.52 0 2.75-1.233 2.75-2.751V6.002A2.75 2.75 0 0 0 20 3.25zm11.2 5.415a.775.775 0 0 0-1.397 0l-.866 1.807-1.998.163a.775.775 0 0 0-.475 1.33l1.442 1.389-.413 1.988a.775.775 0 0 0 1.124.841l1.885-1.008 1.884 1.008a.775.775 0 0 0 1.124-.841l-.413-1.988 1.442-1.389a.775.775 0 0 0-.475-1.33l-1.998-.163z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TicketStar;
