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
      <circle cx={17} cy={18} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={7} cy={18} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 17.972c-1.097-.054-1.78-.217-2.268-.704s-.65-1.171-.704-2.268M9 18h6m4-.028c1.097-.054 1.78-.217 2.268-.704C22 16.535 22 15.357 22 13v-2h-4.7c-.745 0-1.117 0-1.418-.098a2 2 0 0 1-1.284-1.284C14.5 9.317 14.5 8.945 14.5 8.2c0-1.117 0-1.675-.147-2.127a3 3 0 0 0-1.926-1.926C11.975 4 11.417 4 10.3 4H2M2 8h6M2 11h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 6h1.821c1.456 0 2.183 0 2.775.354.593.353.938.994 1.628 2.276L22 11"
      />
    </svg>
  );
};
export default TruckDelivery;
