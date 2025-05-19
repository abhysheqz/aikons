import React from "react";
const Vynil_03: React.FC<
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
        d="M17 1.75H5.5A3.75 3.75 0 0 0 1.75 5.5v13a3.75 3.75 0 0 0 3.75 3.75h13a3.75 3.75 0 0 0 3.75-3.75v-13A3.75 3.75 0 0 0 19 1.783v4.699c.001.679.002 1.281-.228 1.838-.23.556-.657.981-1.138 1.46l-.042.042a6 6 0 1 1-1.07-1.765c.289-.3.359-.399.402-.503.058-.14.076-.312.076-1.21zM9.943 12.667a1 1 0 0 0-1.886.667 4.29 4.29 0 0 0 2.61 2.61 1 1 0 1 0 .667-1.887 2.29 2.29 0 0 1-1.39-1.39"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m17.592 9.823-.056.057-1.829 1.829a1 1 0 0 1-1.414-1.415l1.828-1.828c.168-.168.299-.3.402-.407a6 6 0 0 1 1.07 1.764"
      />
    </svg>
  );
};
export default Vynil_03;
