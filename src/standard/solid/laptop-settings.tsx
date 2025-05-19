import React from "react";
const LaptopSettings: React.FC<
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
        d="M2.286 17.25h19.428l1.457 2.915a.75.75 0 0 1-.671 1.085h-21a.75.75 0 0 1-.67-1.085zM19 2.75A2.25 2.25 0 0 1 21.25 5v10.75H2.75V5A2.25 2.25 0 0 1 5 2.75zm-7 2a1 1 0 0 0-1 1v.67a3 3 0 0 0-.94.54l-.556-.324a1 1 0 0 0-1.008 1.728l.557.324a3 3 0 0 0 0 1.124l-.557.324a1 1 0 0 0 1.008 1.728l.556-.325c.275.233.593.417.94.54v.671a1 1 0 0 0 2 0v-.67c.347-.124.665-.308.94-.54l.556.324a1 1 0 0 0 1.008-1.728l-.557-.324a3 3 0 0 0 0-1.124l.557-.324a1.001 1.001 0 0 0-1.008-1.728l-.556.325a3 3 0 0 0-.94-.54V5.75a1 1 0 0 0-1-1m0 3.5a.999.999 0 1 1 .001 1.998A.999.999 0 0 1 12 8.25"
      />
    </svg>
  );
};
export default LaptopSettings;
