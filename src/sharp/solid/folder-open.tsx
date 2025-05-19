import React from "react";
const FolderOpen: React.FC<
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
        d="M8.05 4.75h-6.3v17.5h15.833l4.667-11.667h-3V7.181H9.995zM3.696 6.695v9.535l2.259-5.646h11.352V9.126H9.061l-1.944-2.43z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.754 3.543a3.3 3.3 0 0 0-1.43-.292c-1.614.048-2.65.665-3.426 1.711l-.447.602-1.201-.895.447-.602c1.05-1.415 2.512-2.254 4.583-2.315a4.8 4.8 0 0 1 2.073.416c1.123.491 1.976 1.116 2.614 2.094l.893-2.237 1.39.557-1.464 3.668h-1.498l-.195-.452c-.492-1.14-1.177-1.747-2.339-2.255"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FolderOpen;
