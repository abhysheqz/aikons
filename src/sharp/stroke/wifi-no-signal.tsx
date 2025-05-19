import React from "react";
const WifiNoSignal: React.FC<
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
        d="m12 22-.607.44a.75.75 0 0 0 1.214 0zM22 8.202l.607.44a.75.75 0 0 0-.071-.965zm-20 0-.536-.525a.75.75 0 0 0-.071.965zM12 4.75c3.708 0 7.058 1.522 9.464 3.977l1.072-1.05A14.7 14.7 0 0 0 12 3.25zM2.536 8.727A13.2 13.2 0 0 1 12 4.75v-1.5c-4.127 0-7.86 1.696-10.536 4.427zm-1.143-.085 10 13.798 1.214-.88-10-13.798zM12.607 22.44l10-13.798-1.214-.88-10 13.798z"
      />
    </svg>
  );
};
export default WifiNoSignal;
