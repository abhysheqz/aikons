import React from "react";
const Envato: React.FC<
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
        d="M17.891 1.258a.75.75 0 0 1 .731.326c2.078 3.116 3.15 6.774 3.13 9.921-.042 6.197-4.093 11.245-10.254 11.245-5.113 0-9.199-4.482-9.25-9.242-.023-2.156 1.115-4.433 2.72-6.038a.75.75 0 0 1 1.277.597 10.2 10.2 0 0 0 .395 3.924C7.832 7.196 11.585 2.165 17.89 1.258"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Envato;
