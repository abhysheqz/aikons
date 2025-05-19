import React from "react";
const WifiMediumSignal: React.FC<
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
        d="m12 21-.607.44a.75.75 0 0 0 1.214 0zM22 7.202l.607.44a.75.75 0 0 0-.071-.965zm-20 0-.536-.525a.75.75 0 0 0-.071.965zM12 3.75c3.708 0 7.058 1.522 9.464 3.977l1.072-1.05A14.7 14.7 0 0 0 12 2.25zM2.536 7.727A13.2 13.2 0 0 1 12 3.75v-1.5c-4.127 0-7.86 1.696-10.536 4.427zm-1.143-.085 10 13.798 1.214-.88-10-13.798zM12.607 21.44l10-13.798-1.214-.88-10 13.798z"
      />
      <path
        fill="currentColor"
        d="M9.105 17.315a7.7 7.7 0 0 1 5.791 0l.56-1.392a9.2 9.2 0 0 0-6.91 0zM6.702 13.93a12.48 12.48 0 0 1 10.597 0l.635-1.359a13.98 13.98 0 0 0-11.867 0z"
      />
    </svg>
  );
};
export default WifiMediumSignal;
