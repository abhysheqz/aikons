import React from "react";
const CheckmarkCircle_03: React.FC<
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
        d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25c3.199 0 6.072 1.397 8.04 3.615-.846.523-1.669 1.18-2.442 1.891-1.267 1.164-2.46 2.525-3.483 3.809a54 54 0 0 0-2.499 3.415l-.088.131a7.9 7.9 0 0 0-1.753-1.795 5.7 5.7 0 0 0-1.033-.605c-.121-.053-.36-.134-.469-.17l-.03-.01-.97-.243-.486 1.94.958.24c.152.067.572.26.854.466.56.407 1.329 1.159 2.006 2.514l.81 1.62.94-1.55c.158-.248.626-.984.92-1.42a52 52 0 0 1 2.404-3.287c.985-1.237 2.107-2.512 3.272-3.582.774-.711 1.541-1.308 2.278-1.745A10.7 10.7 0 0 1 22.75 12c0 5.937-4.813 10.75-10.75 10.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkCircle_03;
