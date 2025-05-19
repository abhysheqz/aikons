import React from "react";
const MailSetting_01: React.FC<
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
        d="M1.25 2.724c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V11.5h-1.954V7.602L12 12 3.205 7.602v10.7H11v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.064 13.604a4.07 4.07 0 0 0-1.799.94l-.937-.67-1.078 1.553.948.678a3.95 3.95 0 0 0 0 2.79l-.948.678 1.078 1.553.937-.67a4.07 4.07 0 0 0 1.8.94v.854h1.87v-.854a4.07 4.07 0 0 0 1.8-.94l.937.67 1.078-1.553-.948-.678a3.952 3.952 0 0 0 0-2.79l.948-.678-1.078-1.553-.937.67a4.07 4.07 0 0 0-1.8-.94v-.854h-1.87zM18 15.396c-.772 0-1.44.384-1.826.951a2.035 2.035 0 0 0 0 2.306c.386.567 1.054.95 1.826.95s1.44-.383 1.826-.95a2.03 2.03 0 0 0 0-2.306 2.2 2.2 0 0 0-1.826-.95"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailSetting_01;
