import React from "react";
const UserStar_02: React.FC<
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
        d="M7.244 12.95A7.75 7.75 0 0 0 1.25 20.5c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75 7.75 7.75 0 0 0-5.995-7.55A5.252 5.252 0 0 0 9 2.75a5.25 5.25 0 0 0-1.755 10.2"
      />
      <path
        fill="currentColor"
        d="M18.998 7.75c.61 0 .996.455 1.192.85v.001l.49.989.873.146c.438.074.963.317 1.142.88.18.563-.106 1.066-.42 1.38l-.001.002-.68.685.194.844c.098.429.128 1.11-.415 1.508-.545.401-1.187.163-1.565-.062l-.81-.483-.809.483c-.38.227-1.02.461-1.564.06-.541-.397-.514-1.076-.415-1.507l.193-.843-.682-.687c-.312-.315-.596-.816-.418-1.378.178-.564.703-.808 1.142-.882l.869-.145.49-.99.001-.002c.197-.395.585-.849 1.193-.849"
      />
    </svg>
  );
};
export default UserStar_02;
