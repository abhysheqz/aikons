import React from "react";
const Expander: React.FC<
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
        d="M16 11.952c-.142.469-.241.93-1.193 1.243C13.202 13.724 14 15.5 12 16m1.538-5.461c-.038.461-.28.85-.824.96-1.285.263-.714 2.001-2.27 2.118M8 12.232C10 12 9 10 11.037 9.384 12.107 9.225 12.24 8.42 12.24 8M21.5 8.5l-.554-.53M15.5 2.5l.53.554m4.916 4.916L19 10l-3.418-.854a1 1 0 0 1-.728-.728L14 5l2.03-1.946m4.916 4.916L16.03 3.054M2.5 15.5l.554.53M8.5 21.5l-.53-.554M3.054 16.03 5 14l3.418.854a1 1 0 0 1 .728.728L10 19l-2.03 1.946M3.054 16.03l4.916 4.916"
      />
    </svg>
  );
};
export default Expander;
