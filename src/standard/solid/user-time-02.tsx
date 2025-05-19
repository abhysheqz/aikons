import React from "react";
const UserTime_02: React.FC<
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
        d="M5.25 6a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 12.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m.75 2.75a.75.75 0 0 0-1.5 0v2.4a.75.75 0 0 0 .471.696l1.5.6a.75.75 0 0 0 .558-1.392l-1.029-.412z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.448 12.357A6.24 6.24 0 0 0 10.75 17.5c0 .608.087 1.195.248 1.75H4a1.75 1.75 0 0 1-1.75-1.75v-2.015c0-.835.38-1.705 1.184-2.181 1.653-.978 3.774-1.554 6.066-1.554 1.403 0 2.741.216 3.948.607"
      />
    </svg>
  );
};
export default UserTime_02;
