import React from "react";
const ComputerProtection: React.FC<
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
        d="M13.5 15.5h-3v-2h3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.5 10.75s-.671-.224-.856-.308a6.7 6.7 0 0 1-1.357-.82c-1.003-.787-2.037-2.111-2.037-4.152V2.401H15c.878 0 1.656-.22 2.221-.446a10 10 0 0 0 .865-.429l.414-.276.414.276c.15.082.584.317.864.429A6 6 0 0 0 22 2.401h.75V5.47c0 2.04-1.035 3.365-2.037 4.152a6.7 6.7 0 0 1-1.357.82c-.185.084-.856.308-.856.308"
      />
      <path
        fill="currentColor"
        d="M2.227 2.25h9.787v1.952h-8.81v12.69h17.591v-4.88h1.955v5.857c0 .54-.438.976-.977.976H13.5v1.953h2.409v1.952H8.091v-1.952H10.5v-1.953H2.227a.977.977 0 0 1-.977-.976V3.226c0-.539.437-.976.977-.976"
      />
    </svg>
  );
};
export default ComputerProtection;
