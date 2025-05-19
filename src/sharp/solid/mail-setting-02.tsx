import React from "react";
const MailSetting_02: React.FC<
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
        d="M1.25 2A.75.75 0 0 1 2 1.25h20a.75.75 0 0 1 .75.75v11.736l-.776-1.117-1.233.883a5 5 0 0 0-.556-.29V12h-4.372v1.212a5 5 0 0 0-.556.29l-1.233-.883-2.504 3.607 1.249.894a5.2 5.2 0 0 0 0 1.76l-1.216.87H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 11.401l6.416-4.277-.832-1.248L12 9.599z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.064 14.104a4.07 4.07 0 0 0-1.799.94l-.937-.67-1.078 1.553.948.678a3.95 3.95 0 0 0 0 2.79l-.948.678 1.078 1.553.937-.67a4.07 4.07 0 0 0 1.8.94v.854h1.87v-.854a4.07 4.07 0 0 0 1.8-.94l.937.67 1.078-1.553-.948-.678a3.952 3.952 0 0 0 0-2.79l.948-.678-1.078-1.553-.937.67a4.07 4.07 0 0 0-1.8-.94v-.854h-1.87zM18 15.896c-.772 0-1.44.384-1.826.951a2.035 2.035 0 0 0 0 2.306c.386.567 1.054.95 1.826.95s1.44-.383 1.826-.95a2.03 2.03 0 0 0 0-2.306 2.2 2.2 0 0 0-1.826-.95"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailSetting_02;
