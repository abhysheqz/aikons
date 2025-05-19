import React from "react";
const Table_01: React.FC<
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
        d="M22.058 5.225V3.25H1.942v1.975h1.006v4.5l-.077.077c-.25.255-.571.63-.857 1.115-.58.985-1.016 2.438-.392 4.179.883 2.464-.05 3.92-.372 4.221l1.384 1.433c.935-.87 2.014-3.158.886-6.31-.383-1.067-.127-1.917.236-2.535.186-.315.398-.565.565-.735l.022-.022h15.314l.022.022c.167.17.38.42.565.735.364.618.619 1.468.236 2.536-1.128 3.151-.049 5.44.886 6.309l1.384-1.433c-.323-.3-1.255-1.757-.372-4.221.624-1.74.188-3.194-.392-4.179a5.9 5.9 0 0 0-.934-1.192v-4.5zM10 7.75h4v-1.5h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Table_01;
