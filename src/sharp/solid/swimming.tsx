import React from "react";
const Swimming: React.FC<
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
        d="M1.25 5.461c0-1.331 1.165-2.384 2.498-2.188l6.677.983L16.17 16.75H15c-1.254 0-2.094-.348-2.898-.837-.296-.18-.562-.36-.833-.542a15.5 15.5 0 0 0-1.7-1.033c-.774-.399-1.741-.58-2.637-.63-.901-.052-1.639.035-1.919.107l-.625-1.334 3.202-2.307-.72-1.846-3.82-.69a2.2 2.2 0 0 1-1.8-2.177M15.25 10a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.732 17c-.441.214-.804.597-1.014 1.299l-1.437-.43c.318-1.064.94-1.803 1.796-2.218.826-.4 1.79-.463 2.754-.353 1.919.219 4.13 1.156 6.01 2.118 1.856.95 3.621 1.672 5.127 1.81.74.068 1.384-.01 1.934-.244.542-.232 1.04-.636 1.466-1.302l1.264.808c-.574.897-1.298 1.513-2.141 1.874-.836.356-1.742.442-2.66.358-1.812-.166-3.796-1.007-5.673-1.968-1.852-.948-3.862-1.777-5.497-1.964-.813-.092-1.457-.017-1.929.212"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Swimming;
