import React from "react";
const Path: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM8 10.393C8 8.637 9.665 7 12 7s4 1.637 4 3.393c0 1.483-1.83 3.098-4 2.4V9.906a1 1 0 1 0-2 0v5.94c0 .513-.001.82-.023 1.037l-.014.103-.022.01a.3.3 0 0 1-.137-.006.9.9 0 0 1-.485-.336 1 1 0 1 0-1.638 1.149c.385.549 1 .981 1.677 1.136.717.165 1.57.018 2.18-.708.312-.37.394-.809.428-1.146.034-.33.034-.742.034-1.192v-1.039c3.11.61 6-1.648 6-4.46C18 7.297 15.188 5 12 5s-6 2.297-6 5.393c0 1.249.471 2.388 1.24 3.287a1 1 0 1 0 1.52-1.3c-.487-.57-.76-1.257-.76-1.987"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Path;
