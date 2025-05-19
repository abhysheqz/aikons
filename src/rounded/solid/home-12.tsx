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
        d="M13.577 2.247a2.75 2.75 0 0 0-3.154 0L2.225 7.985a2.287 2.287 0 0 0 .757 4.092l.325.081.409 4.069c.124 1.24.225 2.242.408 3.027.19.817.488 1.497 1.074 2.027s1.292.759 2.124.866c.8.103 1.807.103 3.053.103h3.25c1.246 0 2.253 0 3.053-.103.832-.107 1.538-.336 2.124-.866s.884-1.21 1.074-2.027c.183-.785.284-1.788.408-3.027l.41-4.069.324-.08a2.287 2.287 0 0 0 .757-4.093zM9.461 15.408a.75.75 0 0 0-.922 1.184c.934.727 2.147 1.158 3.461 1.158s2.527-.431 3.46-1.158a.75.75 0 0 0-.92-1.184c-.666.518-1.554.842-2.54.842s-1.874-.324-2.54-.842"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_12;
