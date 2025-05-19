import React from "react";
const Colosseum: React.FC<
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
        d="M8.747 21.75V19h-1.5v2.75H1.249v-4.151c3-1.158 6.714-1.849 10.75-1.849 1.272 0 2.512.069 3.709.2l2.416 5.8h-5.377V19h-1.5v2.75zM1.692 10.316C4.584 9.012 8.153 8.25 12.001 8.25h.5l2.553 6.129a36 36 0 0 0-4.307-.108V12h-1.5v2.354q-1.279.098-2.5.283V12h-1.5v2.9a28 28 0 0 0-3.997 1.098v-5.483zM1.25 9.144c2.57-1.147 5.609-1.881 8.874-2.086L8.512 2.25l-.624.092C5.62 2.678 3.52 3.285 1.69 4.11l-.442.2zM15.045 11.106q.6.033 1.184.078l.026-2.63.88.166c1.876.353 3.622.896 5.174 1.596l.442.2v5.483c-1.89-.679-4.01-1.182-6.28-1.47zM17.14 16.138l2.338 5.612h3.272V17.6c-1.67-.646-3.563-1.146-5.61-1.463"
      />
    </svg>
  );
};
export default Colosseum;
