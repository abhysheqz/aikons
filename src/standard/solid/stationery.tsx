import React from "react";
const Stationery: React.FC<
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
        d="M6 2.25A1.75 1.75 0 0 0 4.25 4v2.25h4.5V4A1.75 1.75 0 0 0 7 2.25zM8.75 7.75h-4.5V19c0 .162.053.32.15.45l1.5 2a.75.75 0 0 0 1.2 0l1.5-2a.75.75 0 0 0 .15-.45zM13 2.25A1.75 1.75 0 0 0 11.25 4v2.751l3.25-.001a.75.75 0 1 1 0 1.5l-3.25.001v3l3.25-.001a.75.75 0 0 1 0 1.5h-3.25v3h3.25a.75.75 0 0 1 0 1.5h-3.25v2.748c0 .966.784 1.75 1.75 1.75h5a1.75 1.75 0 0 0 1.75-1.75V4A1.75 1.75 0 0 0 18 2.25z"
      />
    </svg>
  );
};
export default Stationery;
