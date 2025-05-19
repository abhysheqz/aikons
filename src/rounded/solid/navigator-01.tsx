import React from "react";
const Navigator_01: React.FC<
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
        d="M4.25 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M19.75 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.388 14.958c.384-.512.883-.958 1.612-.958s1.228.446 1.612.958c.37.494.75 1.208 1.204 2.06l.703 1.322c.348.654.64 1.201.805 1.627.085.22.158.458.173.697.016.255-.033.55-.24.806a1.5 1.5 0 0 1-.525.412 1.36 1.36 0 0 1-.784.1 3 3 0 0 1-.71-.206c-.46-.185-1.049-.492-1.769-.867a10 10 0 0 0-.345-.175l-.065-.028-.017-.006a.2.2 0 0 0-.125.016c-.075.032-.21.101-.386.193-.72.375-1.309.682-1.769.867a3 3 0 0 1-.71.206 1.36 1.36 0 0 1-.784-.1 1.5 1.5 0 0 1-.525-.412 1.14 1.14 0 0 1-.24-.806c.015-.239.089-.478.174-.697.165-.426.457-.973.804-1.627l.704-1.321c.454-.853.833-1.567 1.203-2.06"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M12 8a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Navigator_01;
