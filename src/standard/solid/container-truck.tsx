import React from "react";
const ContainerTruck: React.FC<
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
        d="M13.5 6a1 1 0 0 1 1-1h2.959a3 3 0 0 1 2.457 1.28l2.903 4.147a1 1 0 0 1-1.638 1.146l-2.903-4.146a1 1 0 0 0-.82-.427H14.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17 15.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M7 15.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 3a2 2 0 0 0-2 2l.002 12a2 2 0 0 0 2 2h.331A3.804 3.804 0 0 1 7 14.2a3.8 3.8 0 0 1 3.667 4.8h2.666A3.804 3.804 0 0 1 17 14.2a3.8 3.8 0 0 1 3.667 4.8H21a2 2 0 0 0 2-2v-6a1 1 0 0 0-1-1h-6.5V5a2 2 0 0 0-2-2zm4 5a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ContainerTruck;
