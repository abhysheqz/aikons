import React from "react";
const Submarine: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 12H9.641c-.976 0-1.956.85-2.762 1.309-.343.195-.514.292-.672.262-.157-.03-.321-.221-.65-.601C4.872 12.174 4.13 12 3 12c-.552 0-1 .522-1 1.167v4.666C2 18.478 2.448 19 3 19c1.129 0 1.871-.174 2.558-.97.328-.38.492-.57.65-.6.157-.031.328.067.67.262C7.686 18.15 8.666 19 9.642 19H19c1.657 0 3-1.567 3-3.5S20.657 12 19 12M10.5 12l.56-1.236c.387-.857.58-1.285.952-1.524.371-.24.84-.24 1.78-.24h.415c.94 0 1.41 0 1.781.24.372.24.565.667.953 1.524L17.5 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 9V5a1 1 0 0 1 1-1h1"
      />
    </svg>
  );
};
export default Submarine;
