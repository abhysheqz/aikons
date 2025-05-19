import React from "react";
const MailSecure_01: React.FC<
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
        d="M1.25 2.724c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V11.5h-1.954V7.602L12 12 3.205 7.602v10.7H12v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
      <path
        fill="currentColor"
        d="M18.5 22.25s-.671-.224-.856-.308a6.7 6.7 0 0 1-1.357-.82c-1.003-.787-2.037-2.111-2.037-4.152v-3.069H15c.878 0 1.656-.22 2.221-.446.281-.112.715-.347.864-.429l.415-.276.414.276c.15.082.583.317.864.429a6 6 0 0 0 2.222.446h.75v3.069c0 2.04-1.035 3.365-2.037 4.152-.496.39-.99.654-1.357.82-.185.084-.856.308-.856.308"
      />
    </svg>
  );
};
export default MailSecure_01;
