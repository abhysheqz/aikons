import React from "react";
const Satellite: React.FC<
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
        d="M7.937 2.25a.75.75 0 0 1 .534.22l13.31 13.31a.75.75 0 0 1-.006 1.065 10.13 10.13 0 0 1-7.113 2.905C9.05 19.75 4.5 15.2 4.5 9.588c0-2.769 1.109-5.28 2.905-7.113a.75.75 0 0 1 .532-.225M16.5 4A2.75 2.75 0 1 1 22 4a2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.457 4.793a1 1 0 0 1 .258.97l-1.5 5.5a1 1 0 1 1-1.93-.526l1.04-3.812-3.812 1.04a1 1 0 1 1-.526-1.93l5.5-1.5a1 1 0 0 1 .97.258"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.4 14.587 2.063 21.7a.75.75 0 0 0 .687 1.05h7a.75.75 0 0 0 .681-1.064l-.34-1.638A11.46 11.46 0 0 1 4.4 14.587"
      />
    </svg>
  );
};
export default Satellite;
