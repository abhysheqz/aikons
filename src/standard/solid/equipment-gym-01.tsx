import React from "react";
const EquipmentGym_01: React.FC<
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
        d="M9 2a1 1 0 0 0-2 0v8.5a2 2 0 0 0-2 2V14c0 .364.097.706.268 1A2 2 0 0 0 5 16v1.5c0 .364.097.706.268 1a2 2 0 0 0-.268 1V21a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1.5a2 2 0 0 0-.268-1 2 2 0 0 0 .268-1V16a2 2 0 0 0-.268-1A2 2 0 0 0 19 14v-1.5a2 2 0 0 0-2-2V2a1 1 0 1 0-2 0v2H9zm0 4v4.5h6V6zm7 6.5H7V14h10v-1.5zM4.961 6a1 1 0 0 0-.78.375l-1.4 1.75a1 1 0 0 1-1.562-1.25l1.4-1.75A3 3 0 0 1 4.96 4H5.5a1 1 0 0 1 0 2zM17.5 5a1 1 0 0 1 1-1h.539a3 3 0 0 1 2.342 1.126l1.4 1.748a1 1 0 1 1-1.562 1.25l-1.4-1.749A1 1 0 0 0 19.04 6H18.5a1 1 0 0 1-1-1M7 16v1.5h10V16zm0 5v-1.5h10V21z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentGym_01;
