import React from "react";
const AiCloud: React.FC<
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
        d="M11.299 14.25H12.7l.258.695c.36.976.476 1.24.665 1.43s.455.305 1.43.666l.696.258V18.7l-.695.258c-.976.36-1.24.476-1.43.666s-.305.454-.666 1.43l-.258.695H11.3l-.258-.695c-.36-.976-.476-1.24-.665-1.43s-.455-.305-1.43-.666L8.25 18.7V17.3l.695-.258c.976-.36 1.24-.476 1.43-.666s.305-.454.666-1.43z"
      />
      <path
        fill="currentColor"
        d="M12 2.25a6.25 6.25 0 0 0-6.147 5.115A5.752 5.752 0 0 0 7 18.75v-2.322l2.484-.944.944-2.484h3.144l.944 2.484 2.484.944v2.322h.5a5.25 5.25 0 0 0 .747-10.447A6.25 6.25 0 0 0 12 2.25"
      />
    </svg>
  );
};
export default AiCloud;
