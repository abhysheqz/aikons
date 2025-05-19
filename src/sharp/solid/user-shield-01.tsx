import React from "react";
const UserShield_01: React.FC<
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
        d="M18 22.248c-.113-.04-.671-.224-.856-.307a6.7 6.7 0 0 1-1.357-.82c-1.003-.788-2.037-2.112-2.037-4.153v-3.25h.75c.878 0 1.656-.22 2.221-.446.281-.112.504-.224.654-.306.075-.04.59-.377.625-.4.035.022.55.36.625.4.15.082.373.194.654.306a6 6 0 0 0 2.221.446h.75v3.25c0 2.041-1.034 3.365-2.037 4.153-.496.39-.99.653-1.357.82-.185.083-.743.267-.856.307"
      />
      <path
        fill="currentColor"
        d="M12.5 16.969c0 1.325.358 2.41.874 3.281H1.75v-.75a7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 9.5 1.75a5.25 5.25 0 0 1 1.755 10.2q.646.15 1.245.402z"
      />
    </svg>
  );
};
export default UserShield_01;
