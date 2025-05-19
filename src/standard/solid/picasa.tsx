import React from "react";
const Picasa: React.FC<
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
        d="M15.253 1.751A10.8 10.8 0 0 0 12 1.25c-1.117 0-2.194.17-3.206.486l3.704 3.703a1 1 0 0 1 .062.062l2.69 2.689V1.82zM7.3 2.33A10.75 10.75 0 0 0 1.25 12c0 .975.13 1.92.373 2.819l9.301-8.832-3.508-3.506a.8.8 0 0 1-.117-.152M2.173 16.365a10.8 10.8 0 0 0 5.077 5.281V11.544l-5.066 4.81zM8.75 22.25c1.025.325 2.117.5 3.25.5a10.75 10.75 0 0 0 9.646-6H8.75zM22.25 15.25c.325-1.025.5-2.117.5-3.25a10.75 10.75 0 0 0-6-9.646V15.25z"
      />
    </svg>
  );
};
export default Picasa;
