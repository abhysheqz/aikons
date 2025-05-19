import React from "react";
const SolarPanel_01: React.FC<
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
        d="M12.75 15.25v4h3v1.5h-7.5v-1.5h3v-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.778 3.25h-3.556l-.857 6h5.27zM8.707 3.25H5a.75.75 0 0 0-.728.568L2.914 9.25H7.85zM2.54 10.75l-1.268 5.068A.75.75 0 0 0 2 16.75h4.778l.857-6zM8.293 16.75h7.414l-.857-6h-5.7zM17.222 16.75H22a.75.75 0 0 0 .728-.932L21.46 10.75h-5.096zM21.086 9.25l-1.358-5.432A.75.75 0 0 0 19 3.25h-3.707l.858 6z"
      />
    </svg>
  );
};
export default SolarPanel_01;
