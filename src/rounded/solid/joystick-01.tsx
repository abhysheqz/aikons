import React from "react";
const Joystick_01: React.FC<
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
        d="M12.292 16.25c1.17 0 1.93 0 2.617.22.422.135.82.33 1.177.581.588.413.994 1.003 1.59 1.87.291.422.642.93.808 1.24s.334.718.238 1.172a1.73 1.73 0 0 1-.65 1.014c-.338.259-.751.335-1.126.369-.378.034-.86.034-1.435.034H8.489c-.575 0-1.057 0-1.435-.034-.375-.034-.788-.11-1.127-.37a1.73 1.73 0 0 1-.65-1.013c-.095-.454.073-.861.24-1.171.165-.31.516-.82.807-1.242.596-.866 1.002-1.456 1.59-1.869.357-.25.755-.446 1.177-.581.688-.22 1.446-.22 2.617-.22z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 12a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 11a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.766 1.74c.804.536 1.278 1.436 1.522 2.48.09.38.032.758-.115 1.077l-.257.56a.24.24 0 0 0 .008.22l.489.887c.3.546.287 1.209-.034 1.742l-.374.622c-.045.075-.069.227.02.415.228.48.404 1.005.52 1.398.06.195.152.558.185.686l.001.006a.752.752 0 0 1-.731.917h-3.993a.75.75 0 0 1-.74-.88c.024-.158.094-.627.126-.913.066-.575.134-1.367.146-2.238.012-.874-.033-1.81-.188-2.68-.157-.878-.416-1.638-.799-2.196-.201-.293-.335-.639-.295-1.015.04-.38.243-.659.445-.841.365-.33.879-.483 1.125-.552 1.103-.311 2.118-.242 2.94.305"
      />
    </svg>
  );
};
export default Joystick_01;
