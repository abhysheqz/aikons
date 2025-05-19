import React from "react";
const BerlinTower: React.FC<
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
      <path fill="currentColor" d="M7 9a5 5 0 1 1 10 0A5 5 0 0 1 7 9" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m-2 11a1 1 0 0 1 1 1c0 .766-.182 1.848-.45 3h2.9c-.268-1.152-.45-2.234-.45-3a1 1 0 1 1 2 0c0 .643.195 1.74.508 3a1 1 0 0 1 .513 1.853c.454 1.498.97 2.893 1.373 3.7a1 1 0 1 1-1.788.894c-.518-1.036-1.132-2.747-1.627-4.447h-3.957c-.496 1.7-1.11 3.411-1.628 4.447a1 1 0 1 1-1.788-.894c.403-.807.919-2.202 1.373-3.7A1 1 0 0 1 8.492 16c.313-1.26.508-2.357.508-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BerlinTower;
