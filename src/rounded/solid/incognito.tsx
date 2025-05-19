import React from "react";
const Incognito: React.FC<
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
        d="M7 19.875a2 2 0 1 1 0-4 2 2 0 0 1 0 4m3.7-3.52a4 4 0 1 1-1.2-1.602 4 4 0 0 1 2.5-.878c.946 0 1.816.329 2.5.877a4 4 0 1 1-1.2 1.602c-.35-.3-.805-.479-1.3-.479s-.95.18-1.3.48m4.623.43a2 2 0 1 0 3.354 2.18 2 2 0 0 0-3.354-2.18"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.148 4.645a9 9 0 0 0-.199.696l-1.46 5.536H2a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2h-.488l-1.46-5.536c-.086-.322-.142-.535-.2-.696-.843-2.346-3.63-3.279-5.66-1.827-.14.1-.624.511-.871.724a2.17 2.17 0 0 1-2.641 0 23 23 0 0 0-.87-.724C7.778 1.366 4.99 2.3 4.147 4.645"
      />
    </svg>
  );
};
export default Incognito;
