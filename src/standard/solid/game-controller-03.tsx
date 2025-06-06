import React from "react";
const GameController_03: React.FC<
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
        d="M7.21 4.97a1 1 0 0 0-.494-1.939l-1.963.5a1 1 0 1 0 .494 1.938zm10.033-1.94a1 1 0 1 0-.485 1.94l2 .5a1 1 0 0 0 .485-1.94zM4.923 6.05c4.408-1.067 9.746-1.067 14.154 0 1.029.248 1.822.991 2.185 1.96.584 1.56 1.255 4.19 1.482 7.751.092 1.44-.892 2.488-1.868 3.205-.841.618-1.856 1.119-2.637 1.504q-.215.105-.402.2a.75.75 0 0 1-.988-.298l-1.712-2.996a.25.25 0 0 0-.217-.126H9.08a.25.25 0 0 0-.217.126l-1.712 2.996a.75.75 0 0 1-.988.298l-.401-.2H5.76c-.781-.385-1.796-.886-2.637-1.504-.976-.717-1.96-1.766-1.868-3.205.227-3.56.897-6.19 1.482-7.75.363-.97 1.156-1.713 2.184-1.961m4.784 3.243a1 1 0 0 1 0 1.414l-.793.793.793.793a1 1 0 0 1-1.414 1.414l-.793-.793-.793.793a1 1 0 0 1-1.414-1.414l.793-.793-.793-.793a1 1 0 0 1 1.414-1.414l.793.793.793-.793a1 1 0 0 1 1.414 0M15.997 9h-.009a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2m.991 4a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2h-.01a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GameController_03;
