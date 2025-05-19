import React from "react";
const Raw_02: React.FC<
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
        d="m2.25 22.75.001-21.5h10.11l7.389 7.38V12H4v9h15.75v1.75zM17.8 9.46l-6.238-6.255V9.46zM7.75 13.25a2 2 0 0 1 .83 3.82l1.037 2.68H8.105l-1.09-2.5H6.75v2.5h-1.5v-6.5zm-1 2.5v-1h1a.5.5 0 0 1 0 1zm9.184 4h-1.437l-.655-2h-1.684l-.655 2h-1.437l1.876-6.5h2.116zM13 14.943l.392 1.307h-.784zm7.25-1.693h1.5v6.5h-1.182l-1.565-1.655-1.547 1.655H16.25v-6.5h1.5v3.99l1.247-1.335 1.253 1.326z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Raw_02;
