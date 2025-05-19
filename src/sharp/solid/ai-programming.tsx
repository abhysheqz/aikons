import React from "react";
const AiProgramming: React.FC<
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
        d="M1.25 4.75H14v2.322l2.484.944.944 2.484h3.144l.944-2.484.234-.089V22.25H1.25zm15.19 8.75-2-2 1.06-1.06 3.06 3.06-3.06 3.06-1.06-1.06zm-7.88-2-2 2 2 2-1.06 1.06-3.06-3.06 3.06-3.06zm2.414 5.948 2.474-7.423-1.423-.474-2.474 7.423z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.299 1.75H19.7l.258.695c.36.976.476 1.24.666 1.43s.454.305 1.43.666l.695.258V6.2l-.695.258c-.976.36-1.24.476-1.43.665s-.305.455-.666 1.43l-.258.696H18.3l-.258-.695c-.36-.976-.476-1.24-.666-1.43s-.454-.305-1.43-.666L15.25 6.2V4.8l.695-.258c.976-.36 1.24-.476 1.43-.665s.305-.455.666-1.43z"
      />
    </svg>
  );
};
export default AiProgramming;
