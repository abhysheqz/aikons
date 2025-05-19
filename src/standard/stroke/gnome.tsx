import React from "react";
const Gnome: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 12.5c2.583 0 4.903.386 6.5 1 0-.653-.19-1.291-.545-1.838L12 2.5l-5.955 9.162A3.37 3.37 0 0 0 5.5 13.5c1.597-.614 3.917-1 6.5-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 13s.5.8.5 2c0 0 0 2-1.5 2s-1.5-1.5-3-1.5S10.5 17 9 17s-1.5-2-1.5-2c0-1.2.5-2 .5-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 13.5s.5.9.5 2.5c0 2-1.262 3.13-3 4-2 1-4 2.5-4 2.5S10 21 8 20c-1.738-.87-3-2-3-4 0-1.6.5-2.5.5-2.5"
      />
    </svg>
  );
};
export default Gnome;
