import React from "react";
const BitcoinDatabase: React.FC<
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
      <ellipse
        cx={12}
        cy={5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={8}
        ry={3}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15c-4.418 0-8-1.343-8-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.938 20.667v-5.334m1.562 0V14m0 8v-1.333M15.938 18h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H15M19.063 18c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H15"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 12V5m-8 17c-4.418 0-8-1.343-8-3V5"
      />
    </svg>
  );
};
export default BitcoinDatabase;
