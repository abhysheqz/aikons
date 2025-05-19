import React from "react";
const Quotes: React.FC<
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
        d="M11.75 1C5.845 1 1 5.588 1 11.317c0 2.747 1.12 5.24 2.935 7.082.267.272.354.551.316.756a4.54 4.54 0 0 1-.932 2.015.75.75 0 0 0 .445 1.21c1.611.3 3.281.03 4.713-.731.17-.117.646-.322 1.2-.207.683.128 1.377.192 2.073.191 5.905 0 10.75-4.588 10.75-10.316S17.655 1 11.75 1M9.5 12.5v.25A2.25 2.25 0 0 1 7.25 15a.75.75 0 0 0 0 1.5A3.75 3.75 0 0 0 11 12.75v-4A1.75 1.75 0 0 0 9.25 7h-2A1.75 1.75 0 0 0 5.5 8.75v2c0 .966.784 1.75 1.75 1.75zm7 0v.25A2.25 2.25 0 0 1 14.25 15a.75.75 0 0 0 0 1.5A3.75 3.75 0 0 0 18 12.75v-4A1.75 1.75 0 0 0 16.25 7h-2a1.75 1.75 0 0 0-1.75 1.75v2c0 .966.784 1.75 1.75 1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quotes;
