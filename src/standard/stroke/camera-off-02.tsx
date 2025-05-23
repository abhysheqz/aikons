import React from "react";
const CameraOff_02: React.FC<
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
        strokeWidth={1.5}
        d="M10.45 11A3.415 3.415 0 1 0 15 15.551"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6"
      />
      <path
        fill="currentColor"
        d="m8.272 3.684-.711-.237zM16.5 6l-.711.237a.75.75 0 0 0 .711.513zm4.75 12a.75.75 0 0 0 1.5 0zM15.728 3.684l.711-.237zM6 6.75a.75.75 0 0 0 0-1.5zm1.288-2.487a.75.75 0 1 0 1.424.474zM1.25 8v11h1.5V8zM16.5 6.75H20v-1.5h-3.5zM21.25 8v10h1.5V8zm-4.038-2.237-.773-2.316-1.423.474.773 2.316zM9.22 3.75h5.558v-1.5H9.221zM4 21.75h16v-1.5H4zM16.44 3.447a1.75 1.75 0 0 0-1.66-1.197v1.5a.25.25 0 0 1 .236.17zM20 6.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 5.25zM8.984 3.92a.25.25 0 0 1 .237-.17v-1.5a1.75 1.75 0 0 0-1.66 1.197zM1.25 19A2.75 2.75 0 0 0 4 21.75v-1.5c-.69 0-1.25-.56-1.25-1.25zM4 5.25A2.75 2.75 0 0 0 1.25 8h1.5c0-.69.56-1.25 1.25-1.25zm2 0H4v1.5h2zm2.712-.513.272-.816-1.423-.474-.273.816zm11.913 15.346a1.24 1.24 0 0 1-.625.167v1.5c.5 0 .97-.134 1.375-.368z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 2 20 20"
      />
    </svg>
  );
};
export default CameraOff_02;
