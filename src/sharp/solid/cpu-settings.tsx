import React from "react";
const CpuSettings: React.FC<
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
        d="M8.5 4.5V2h2v2.5zm5 0V2h2v2.5zM2 8.5h2.5v2H2zm17.5 0H22v2h-2.5zM2 13.5h2.5v2H2zM8.5 22v-2.5h2V22zM16.314 13.354a4.07 4.07 0 0 0-1.799.94l-.937-.67-1.078 1.553.948.678a3.95 3.95 0 0 0 0 2.79l-.948.678 1.078 1.553.937-.67a4.07 4.07 0 0 0 1.8.94V22h1.87v-.854a4.07 4.07 0 0 0 1.8-.94l.937.67L22 19.324l-.948-.678a3.952 3.952 0 0 0 0-2.79l.948-.678-1.078-1.553-.937.67a4.07 4.07 0 0 0-1.8-.94V12.5h-1.87zm.936 1.792c-.772 0-1.44.384-1.826.951a2.035 2.035 0 0 0 0 2.306c.386.567 1.054.95 1.826.95s1.44-.383 1.826-.95a2.03 2.03 0 0 0 0-2.306 2.2 2.2 0 0 0-1.826-.95"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.75 4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v8.067l-.26.185a5 5 0 0 0-.555-.29V11.25h-4.372v1.212a5 5 0 0 0-.556.29l-1.233-.883-2.504 3.607 1.249.894a5.2 5.2 0 0 0 0 1.76l-1.25.894.852 1.226H4.5a.75.75 0 0 1-.75-.75zM12 7H8v2h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CpuSettings;
