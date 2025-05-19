import React from "react";
const Camper: React.FC<
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
        d="M17 16.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M7 16.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 5a3 3 0 0 1 3-3h14.764a3 3 0 0 1 2.683 1.658l1.447 2.895A1 1 0 0 1 22 8h-5a1 1 0 1 1 0-2h3.382l-.724-1.447A1 1 0 0 0 18.764 4H4a1 1 0 0 0-1 1v9a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 7a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1M13 8a2 2 0 0 1 2-2h1.93a3 3 0 0 1 2.496 1.336l3.406 5.11A1 1 0 0 1 23 13v3a4 4 0 0 1-2.357 3.648q.057-.316.057-.648a3.7 3.7 0 1 0-7.263 1h-2.874A3.703 3.703 0 0 0 7 15.3 3.7 3.7 0 0 0 3.437 20H3a2 2 0 0 1-2-2v-5a1 1 0 0 1 1-1h11zm7.131 4H15V8h1.93a1 1 0 0 1 .832.445z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Camper;
