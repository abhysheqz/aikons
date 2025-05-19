import React from "react";
const Agreement_03: React.FC<
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
        d="M9.013 22.004c.36 0 1.694-.608 3.055-1.823m0 0c1.161-1.036 2.342-2.514 2.957-4.433 1.336-4.171-6.68 0-4.008 3.475.329.428.683.74 1.051.958Zm0 0c1.606.948 3.49.096 4.765-.884.39-.3.585-.449.701-.402.117.046.184.314.32.85.436 1.715 1.722 3.1 3.184.869"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.081 13.997V2.114a.1.1 0 0 0-.1-.1h-9.977L3.036 8.968v12.943a.1.1 0 0 0 .1.1h3.9m2.968-19.367v6.324H3.556"
      />
    </svg>
  );
};
export default Agreement_03;
