import React from "react";
const Touchpad_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.986 9.998V2H2v15.994h4.997"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.947 21.992v-1.978L9.32 15.745a1.417 1.417 0 0 1 2.048-1.952l1.628 1.523V7.418c.002-.578.367-.98.808-1.232a1.45 1.45 0 0 1 1.503.066c.376.25.695.62.695 1.166v4.528c.595 0 3.958.178 5.52 2.159.46.582.54 1.368.437 2.101-.249 1.779-1.22 3.116-1.682 3.752l-.009.012v2.033"
      />
    </svg>
  );
};
export default Touchpad_01;
