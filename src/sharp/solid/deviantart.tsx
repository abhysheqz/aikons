import React from "react";
const Deviantart: React.FC<
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
        d="M15.101 1.25h4.649v5.481l-3.832 5.63h3.832v5.95l-7.85-.058L8.9 22.75H4.25v-5.481l3.832-5.63H4.25V5.694h7.851z"
      />
    </svg>
  );
};
export default Deviantart;
