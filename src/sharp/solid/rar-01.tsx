import React from "react";
const Rar_01: React.FC<
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
        d="m3.25 13.75.001-12.5h10.11l7.389 7.38v5.12zM18.8 9.46l-6.238-6.255V9.46zM6 15.25a2.25 2.25 0 0 1 .664 4.4l1.55 3.1H6.536l-1.5-3H4.75v3h-1.5v-7.5zm0 3H4.75v-1.5H6a.75.75 0 0 1 0 1.5M13.308 22.75l-.543-2h-1.53l-.533 2H9.147l2.03-7.5h1.646l2.04 7.5zM12 17.939l.357 1.311h-.714zM20.75 17.5a2.25 2.25 0 0 0-2.25-2.25h-2.75v7.5h1.5v-3h.287l1.536 2.964h1.677l-1.586-3.063A2.25 2.25 0 0 0 20.75 17.5m-2.25.75h-1.25v-1.5h1.25a.75.75 0 0 1 0 1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Rar_01;
