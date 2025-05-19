import React from "react";
const ListSetting: React.FC<
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
        d="M16.866 12v1.27a3.9 3.9 0 0 1 1.595.84l1.196-.78 1.093 1.675-1.17.765a3.8 3.8 0 0 1 0 2.46l1.17.765-1.094 1.675-1.195-.78a3.9 3.9 0 0 1-1.595.84V22h-2v-1.27a3.9 3.9 0 0 1-1.594-.84l-1.196.78-1.093-1.675 1.17-.764a3.8 3.8 0 0 1 0-2.461l-1.17-.765 1.093-1.675 1.195.78a3.9 3.9 0 0 1 1.595-.84V12zm-1 3.143a1.93 1.93 0 0 0-1.6.835 1.8 1.8 0 0 0 0 2.044c.34.5.927.835 1.6.835a1.93 1.93 0 0 0 1.601-.835c.2-.294.316-.644.316-1.022s-.115-.728-.316-1.022a1.93 1.93 0 0 0-1.6-.835M19.25 4h-16V2h16zM19.25 10h-16V8h16zM8.25 16h-5v-2h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ListSetting;
