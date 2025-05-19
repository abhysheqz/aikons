import React from "react";
const TwoSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM12 6a4 4 0 0 0-4 4 1 1 0 1 0 2 0 2 2 0 1 1 4 0c0 .588-.43 1.312-1.325 2.107-.855.759-1.936 1.408-2.791 1.859C8.789 14.543 8 15.681 8 17a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2h-4.552a1.6 1.6 0 0 1 .369-.265c.914-.482 2.157-1.219 3.186-2.133C14.99 12.725 16 11.491 16 10a4 4 0 0 0-4-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TwoSquare;
