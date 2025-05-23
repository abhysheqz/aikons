import React from "react";
const SoilMoistureField: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 3c1.864 0 2.796 0 3.53.304A4 4 0 0 1 7.697 5.47C8 6.204 8 7.136 8 9c-1.864 0-2.796 0-3.53-.304A4 4 0 0 1 2.303 6.53C2 5.796 2 4.864 2 3M12 5c-1.242 0-1.864 0-2.354.203-.653.27-1.172.79-1.443 1.443C8 7.136 8 7.757 8 9c1.243 0 1.864 0 2.354-.203a2.67 2.67 0 0 0 1.443-1.443C12 6.864 12 6.243 12 5M8 9v5M12 14H2M12 17H2M12 20H2M18.5 15S16 17 16 18.503c0 1.231.947 2.497 2.5 2.497s2.5-1.266 2.5-2.497C21 17 18.5 15 18.5 15"
      />
    </svg>
  );
};
export default SoilMoistureField;
