import React from "react";
const UngroupLayers: React.FC<
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
        d="M1 3.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17 3.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17 19.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1 19.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.73 6.508a1.99 1.99 0 0 0-1.96 0L6.987 8.662a1.437 1.437 0 0 0 0 2.509l3.783 2.154a1.99 1.99 0 0 0 1.96 0l3.784-2.154a1.437 1.437 0 0 0 0-2.509zM7.592 13.23a.917.917 0 1 0-.85 1.624l4.083 2.139a1.79 1.79 0 0 0 1.85 0l4.083-2.14a.917.917 0 1 0-.85-1.623l-4.158 2.18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UngroupLayers;
