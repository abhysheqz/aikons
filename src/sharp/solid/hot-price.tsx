import React from "react";
const HotPrice: React.FC<
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
        d="M11.618 1.25s1.742 1.326 2.126 1.655c.766.656 1.79 1.595 2.817 2.725 2.017 2.22 4.189 5.334 4.189 8.559 0 4.728-3.918 8.561-8.75 8.561s-8.75-3.833-8.75-8.561c0-3.225 2.172-6.339 4.19-8.56L8 5.014l1.699 1.87zm3.911 11.28-6 6-1.06-1.06 6-6zm-5.02-1.03H8.5v2h2.009zm4.992 5h-2.01v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HotPrice;
