import React from "react";
const Home_12: React.FC<
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
        d="M13.577 2.247a2.75 2.75 0 0 0-3.154 0L2.225 7.985a2.287 2.287 0 0 0 .757 4.092l.325.081L4.322 22.25h15.356l1.015-10.092.325-.08a2.287 2.287 0 0 0 .757-4.093zM9.46 15.408l-.591-.46-.922 1.183.592.46c.934.727 2.147 1.159 3.46 1.159 1.315 0 2.528-.432 3.461-1.158l.592-.461-.921-1.184-.592.461c-.665.518-1.553.842-2.54.842-.986 0-1.873-.324-2.539-.842"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_12;
