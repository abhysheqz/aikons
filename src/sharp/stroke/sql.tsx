import React from "react";
const Sql: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3v18h18V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.408 9.992c-.195-.548-1.038-1.44-2.297-.716-.584.336-1.053 1.714.05 2.455.01.022.085.08.292.17.159.068.336.075.51.08l.002.001c.382.014.946.171 1.307.726.125.2.367.76.066 1.432-.29.647-.994.849-1.314.85-.342.034-1.112-.134-1.428-.983m6.905.988c-.83 0-1.502-.673-1.502-1.502v-2.987a1.502 1.502 0 1 1 3.005 0v2.987c0 .83-.673 1.502-1.503 1.502Zm0 0 1.503 1.496m2.493-7.988v6.5H18.5"
      />
    </svg>
  );
};
export default Sql;
