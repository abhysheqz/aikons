import React from "react";
const Wifi_01: React.FC<
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
        d="M7.543 13.793c2.39-2.39 6.524-2.39 8.914 0a1 1 0 0 1-1.414 1.414c-1.61-1.61-4.476-1.61-6.086 0a1 1 0 0 1-1.414-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.86 10.732c4.36-3.633 10.146-3.659 14.303.019a1 1 0 0 1-1.326 1.498c-3.378-2.989-8.056-3.015-11.697.02a1 1 0 1 1-1.28-1.537"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.5c3.695 0 7.338 1.443 10.645 4.236a1 1 0 0 1-1.29 1.528C18.346 6.724 15.147 5.5 12 5.5S5.654 6.723 2.645 9.264a1 1 0 0 1-1.29-1.528C4.662 4.943 8.305 3.5 12 3.5M9.75 18a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wifi_01;
