import React from "react";
const TruckDelivery: React.FC<
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
      <circle cx={17} cy={18} r={2.5} fill="currentColor" />
      <circle cx={7} cy={18} r={2.5} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 8a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2h2.867a3 3 0 0 1 2.573 1.457l2.417 4.029A1 1 0 0 1 23 11v6a2 2 0 0 1-2 2h-.436A3.704 3.704 0 0 0 17 14.3a3.7 3.7 0 0 0-3.567 4.687l-2.865-.005q.13-.47.132-.982a3.7 3.7 0 1 0-7.267.987l-.413.004a2 2 0 0 1-2.018-2v-4.03c.299.153.638.239.998.239h4a2.2 2.2 0 0 0 2.05-3A2.2 2.2 0 0 0 8 5.8H2c-.36 0-.7.086-1 .24zm19.234 5H15V7h2.867a1 1 0 0 1 .858.486z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 12a1 1 0 0 1-1-.957v-.085A1 1 0 0 1 2 10h4a.998.998 0 1 1 0 2zM1 8.03A1 1 0 0 0 2 9h6a1 1 0 0 0 0-2H2a1 1 0 0 0-1 .97z"
      />
    </svg>
  );
};
export default TruckDelivery;
