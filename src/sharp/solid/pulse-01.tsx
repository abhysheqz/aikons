import React from "react";
const Pulse_01: React.FC<
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
        d="M11.74 5h2.073l2.102 10.091L17.28 11H22v2h-3.28l-2 6h-2.033l-2.04-9.792L10.76 16H8.692l-1.136-5.3-.863 2.3H2v-2h3.307l1.5-4h2.001l1.035 4.829z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pulse_01;
