import React from "react";
const Restaurant_01: React.FC<
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
        d="M16.034 10.08 4.126 21.99 2.77 20.632l11.909-11.91z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.912 3.367-4.795 4.796 2.48 2.48 4.796-4.795 1.356 1.356-6.153 6.153-5.191-5.194 6.15-6.152z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.83 5.284-4.234 4.234-1.356-1.356 4.234-4.235z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.903 2.558c-1.244-.286-2.734-.232-3.734.768s-1.054 2.49-.768 3.734c.294 1.283 1.004 2.6 1.954 3.55.973.973 2.083 1.442 3.22 1.385.786-.04 1.51-.327 2.141-.765l10.76 10.76 1.356-1.357-10.76-10.76c.439-.63.726-1.355.766-2.141.057-1.137-.412-2.247-1.385-3.22-.95-.95-2.267-1.66-3.55-1.954"
      />
    </svg>
  );
};
export default Restaurant_01;
