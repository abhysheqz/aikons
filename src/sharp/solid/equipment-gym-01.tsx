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
        d="M5 19a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm12 0H7v1.5h10z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 15.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm12 0H7V17h10z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 12a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm12 0H7v1.5h10zM3.244 3.875a1 1 0 0 1 .779-.375h1.994v2H4.502L2.807 7.624 1.25 6.374zM19.498 5.5h-1.515v-2h1.994c.303 0 .59.138.779.375l1.994 2.5-1.557 1.25zm-11.487-2h7.978v2H8.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 11V1.5h2V11zm8 0V1.5h2V11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentGym_01;
