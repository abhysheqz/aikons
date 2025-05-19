import React from "react";
const NuclearPower: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 12.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.032 7.93 2.51-4.408S14.882 2 11.999 2 7.542 3.522 7.542 3.522l2.455 4.395m6.977 5.09 4.952.01s.466 2.223-.946 4.756S17.478 21 17.478 21l-2.507-4.478m-5.942 0L6.522 21s-2.09-.693-3.502-3.227-.946-4.756-.946-4.756l4.951-.01"
      />
    </svg>
  );
};
export default NuclearPower;
