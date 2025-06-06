import React from "react";
const AlignLeft: React.FC<
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
        d="M7.252 7.5c-.004-.356-.01-1.008.077-1.435.113-.553.393-1.136 1.048-1.514.307-.177.633-.243.962-.273.311-.028.69-.028 1.13-.028h1.065c.44 0 .819 0 1.13.028.33.03.655.096.963.273.654.378.934.96 1.047 1.514.087.427.081 1.079.078 1.435.003.356.009 1.008-.078 1.435-.113.553-.393 1.136-1.047 1.514-.308.177-.634.243-.963.273-.311.028-.69.028-1.13.028h-1.065c-.44 0-.819 0-1.13-.028-.33-.03-.655-.096-.962-.273-.655-.378-.935-.96-1.048-1.514-.087-.427-.08-1.079-.077-1.435M7.252 16.5c-.004-.356-.01-1.008.077-1.435.113-.553.393-1.136 1.048-1.514.307-.177.633-.243.962-.273.311-.028.69-.028 1.13-.028h7.065c.44 0 .819 0 1.13.028.33.03.655.096.963.273.654.378.934.96 1.047 1.514.087.427.081 1.079.078 1.435.003.356.009 1.008-.078 1.435-.113.553-.393 1.136-1.047 1.514-.308.177-.633.243-.963.273-.311.028-.69.028-1.13.028h-7.065c-.44 0-.819 0-1.13-.028-.33-.03-.655-.096-.962-.273-.655-.378-.935-.96-1.048-1.514-.087-.427-.08-1.079-.077-1.435"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 1a1 1 0 0 0-1 1v20a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlignLeft;
