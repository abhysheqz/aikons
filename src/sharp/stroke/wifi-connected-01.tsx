import React from "react";
const WifiConnected_01: React.FC<
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
        d="m15.176 15.619-.28.695.543.219.344-.474zM22 6.201l.608.44a.75.75 0 0 0-.072-.965zm-20 0-.535-.525a.75.75 0 0 0-.072.965zm2.572 3.659c4.683-2.815 10.174-2.815 14.856 0l.773-1.286c-5.158-3.1-11.243-3.1-16.402 0zm4.532 6.453a7.7 7.7 0 0 1 5.792 0l.56-1.391a9.2 9.2 0 0 0-6.91 0zm-2.402-3.383a12.48 12.48 0 0 1 10.596 0l.636-1.359a13.98 13.98 0 0 0-11.867 0zM12 2.75c3.708 0 7.059 1.522 9.465 3.977l1.07-1.05A14.7 14.7 0 0 0 12 1.25zM2.536 6.727A13.2 13.2 0 0 1 12 2.75v-1.5c-4.127 0-7.86 1.696-10.535 4.427zm-1.143-.085 10 13.798 1.214-.88-10-13.798zm14.39 9.417 6.825-9.417-1.215-.88-6.825 9.416z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m14 19 2 2 6-6" />
    </svg>
  );
};
export default WifiConnected_01;
