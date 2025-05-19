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
        d="M12 3.75c3.457 0 6.869 1.276 10 3.75l-1.418 1.425C17.802 6.785 14.879 5.75 12 5.75S6.198 6.784 3.418 8.925L2 7.5c3.131-2.474 6.543-3.75 10-3.75M14.514 15.023c-1.462-1.03-3.566-1.03-5.028 0l-1.421-1.428c2.248-1.793 5.622-1.793 7.87 0z"
      />
      <path
        fill="currentColor"
        d="m6.63 12.153-1.42-1.427c4.183-3.285 9.58-3.315 13.587-.008l-1.415 1.423c-3.176-2.513-7.357-2.534-10.752.012M10 18.25a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
      />
    </svg>
  );
};
export default Wifi_01;
