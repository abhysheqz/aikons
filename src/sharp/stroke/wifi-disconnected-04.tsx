import React from "react";
const WifiDisconnected_04: React.FC<
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
        d="m22 7.202.607.44a.75.75 0 0 0-.071-.965zm-20 0-.536-.525a.75.75 0 0 0-.071.965zM12 3.75c3.708 0 7.058 1.522 9.464 3.977l1.072-1.05A14.7 14.7 0 0 0 12 2.25zM2.536 7.727A13.2 13.2 0 0 1 12 3.75v-1.5c-4.127 0-7.86 1.696-10.536 4.427zm-1.143-.085 10 13.798 1.214-.88-10-13.798zM19.13 12.44l3.477-4.798-1.214-.88-3.478 4.798z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21 15-6 6m6 0-6-6"
      />
    </svg>
  );
};
export default WifiDisconnected_04;
