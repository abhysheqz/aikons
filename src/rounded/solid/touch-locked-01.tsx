import React from "react";
const TouchLocked_01: React.FC<
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
        d="M17.5 13.25a2.25 2.25 0 0 0-2.25 2.25v.888a2 2 0 0 0-.375.163 2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962-.028.312-.028.755-.028 1.195s0 .82.028 1.13c.03.33.096.656.273.963.198.342.482.626.824.824.307.177.633.243.962.273.312.028.691.028 1.13.028h1.065c.44 0 .82 0 1.13-.028.33-.03.656-.096.963-.273.342-.198.626-.482.824-.824.177-.307.243-.633.273-.962.028-.312.028-.691.028-1.13 0-.44 0-.884-.028-1.196-.03-.329-.096-.655-.273-.962a2.25 2.25 0 0 0-.824-.824 2 2 0 0 0-.375-.163V15.5a2.25 2.25 0 0 0-2.25-2.25m.75 3h-1.5v-.75a.75.75 0 0 1 1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.25 1.25a2.5 2.5 0 0 0-2.5 2.5v8.374l-.97-1.015a2.4 2.4 0 0 0-3.503.337 2.53 2.53 0 0 0 .006 3.1l3.278 4.33c.599.792.834 1.182.944 1.49.144.463.264.849.377 1.14.106.273.255.605.526.832.262.262.725.363.981.389.236.023.52.023.827.023h1.745c.456 0 .684 0 .774-.13s.003-.357-.17-.813c-.15-.392-.26-.775-.28-1.009-.035-.38-.035-.818-.035-1.222s0-.994.034-1.374c.04-.434.137-1.004.468-1.577.254-.44.594-.822.998-1.125a3.75 3.75 0 0 1 5.183-3.467c.57.236.854.354.947.225.092-.13-.075-.32-.41-.7a3 3 0 0 0-.117-.125c-2.034-2.047-4.74-2.622-6.603-2.685V3.75a2.5 2.5 0 0 0-2.5-2.5"
      />
    </svg>
  );
};
export default TouchLocked_01;
