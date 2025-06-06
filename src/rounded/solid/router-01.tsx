import React from "react";
const Router_01: React.FC<
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
        d="M11.995 1c-1.73 0-3.32.64-4.626 1.702A1 1 0 0 0 8.63 4.253C9.623 3.447 10.777 3 11.995 3c1.221 0 2.379.45 3.372 1.261a1 1 0 0 0 1.265-1.549C15.325 1.644 13.73 1 11.995 1"
      />
      <path
        fill="currentColor"
        d="M11.995 4.36c-.98 0-1.898.288-2.697.784a1 1 0 0 0 1.054 1.7 3.1 3.1 0 0 1 1.643-.483c.581 0 1.14.17 1.65.488a1 1 0 0 0 1.058-1.698 5.1 5.1 0 0 0-2.708-.79M12 8a1 1 0 1 0 0 2h.006a1 1 0 1 0 0-2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.052 12.25H5.948c-.899 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.726-.456.455-.642 1.022-.726 1.65-.08.594-.08 1.343-.08 2.242v.104c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h12.104c.899 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.343.08-2.242v-.104c0-.899 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.343-.08-2.242-.08M5 17a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m9-1a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm4 0a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Router_01;
