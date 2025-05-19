import React from "react";
const MailSecure_02: React.FC<
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
        d="M2 1.75a.75.75 0 0 0-.75.75v17c0 .414.336.75.75.75h11.873c-.515-.87-.873-1.955-.873-3.28V12.65h2c.674 0 1.291-.17 1.757-.357.085-.033.682-.34.682-.34l1.061-.706 1.06.707s.598.306.683.34A4.8 4.8 0 0 0 22 12.65h.75V2.5a.75.75 0 0 0-.75-.75zm4.416 3.626-.832 1.248L12 10.901l6.416-4.277-.832-1.248L12 9.099z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.5 22.25s-.671-.224-.856-.308a6.7 6.7 0 0 1-1.357-.82c-1.002-.787-2.037-2.111-2.037-4.152v-3.069H15a6 6 0 0 0 2.221-.446 10 10 0 0 0 .865-.429l.414-.276.414.276c.15.082.584.317.865.429a6 6 0 0 0 2.221.446h.75v3.069c0 2.04-1.034 3.365-2.037 4.152-.496.39-.989.654-1.357.82-.185.084-.856.308-.856.308"
      />
    </svg>
  );
};
export default MailSecure_02;
