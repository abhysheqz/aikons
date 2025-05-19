import React from "react";
const LaptopCharging: React.FC<
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
        d="M2.286 17.25h19.428l1.457 2.915a.75.75 0 0 1-.671 1.085h-21a.75.75 0 0 1-.67-1.085zM19 2.75A2.25 2.25 0 0 1 21.25 5v10.75H2.75V5A2.25 2.25 0 0 1 5 2.75zm-6.553 2.605a1 1 0 0 0-1.341.448l-1.5 3a1 1 0 0 0 .894 1.447h1.382l-.777 1.553a1 1 0 0 0 1.79.894l1.5-3A1 1 0 0 0 13.5 8.25h-1.382l.777-1.553a1 1 0 0 0-.448-1.342"
      />
    </svg>
  );
};
export default LaptopCharging;
