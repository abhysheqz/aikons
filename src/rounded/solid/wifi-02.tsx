import React from "react";
const Wifi_02: React.FC<
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
        d="M10.5 18.5A1.5 1.5 0 0 1 12 17h.012a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5M7.543 14.793c2.39-2.39 6.524-2.39 8.914 0a1 1 0 0 1-1.414 1.414c-1.61-1.61-4.476-1.61-6.086 0a1 1 0 0 1-1.414-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.86 11.732c4.36-3.633 10.146-3.659 14.303.019a1 1 0 0 1-1.326 1.498c-3.378-2.989-8.056-3.015-11.697.02a1 1 0 1 1-1.28-1.537"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.5c3.695 0 7.338 1.443 10.645 4.236a1 1 0 0 1-1.29 1.528C18.346 7.724 15.147 6.5 12 6.5s-6.346 1.223-9.355 3.764a1 1 0 1 1-1.29-1.528C4.662 5.943 8.305 4.5 12 4.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wifi_02;
