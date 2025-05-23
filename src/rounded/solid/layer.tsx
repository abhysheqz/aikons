import React from "react";
const Layer: React.FC<
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
        d="M9.435 4.066c1.04-.479 1.774-.816 2.565-.816s1.524.337 2.565.816l5.092 2.34c.856.392 1.575.723 2.074 1.047.502.327 1.019.8 1.019 1.547s-.517 1.22-1.019 1.547c-.499.324-1.218.655-2.074 1.048l-5.092 2.34c-1.04.478-1.774.815-2.565.815s-1.524-.337-2.565-.816l-5.092-2.34c-.856-.392-1.575-.723-2.074-1.047C1.767 10.22 1.25 9.747 1.25 9s.517-1.22 1.019-1.547c.499-.324 1.218-.655 2.074-1.048z"
      />
      <path
        fill="currentColor"
        d="M3.434 12.828c-.46.22-.855.424-1.165.626-.502.326-1.019.799-1.019 1.546 0 .748.517 1.22 1.019 1.547.499.325 1.218.655 2.074 1.048l5.092 2.34c1.04.478 1.774.815 2.565.815s1.524-.337 2.565-.816l5.092-2.339c.856-.393 1.575-.723 2.074-1.048.502-.327 1.019-.8 1.019-1.547s-.517-1.22-1.019-1.546c-.31-.202-.705-.406-1.165-.626l-.201.093-5.317 2.442c-.913.422-1.921.887-3.048.887s-2.135-.465-3.048-.887l-5.317-2.442z"
      />
    </svg>
  );
};
export default Layer;
