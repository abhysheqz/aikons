import React from "react";
const Astronaut_01: React.FC<
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
        d="M12 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.2 11a7.8 7.8 0 0 1 12.76-6.02l-3.37 3.368a.75.75 0 0 0 .03 1.09c.318.283.684.788.786 1.342.09.488-.004 1.105-.776 1.775a.75.75 0 0 0-.04 1.097l3.37 3.368-.057.047 1.226 1.516A9.73 9.73 0 0 0 21.75 11c0-5.385-4.365-9.75-9.75-9.75S2.25 5.615 2.25 11v8.775a.975.975 0 1 0 1.95 0z"
      />
      <path
        fill="currentColor"
        d="M17.116 17.25c.818 0 1.376 0 1.855.128a3.75 3.75 0 0 1 2.651 2.651c.128.48.128 1.153.128 1.971a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75z"
      />
    </svg>
  );
};
export default Astronaut_01;
