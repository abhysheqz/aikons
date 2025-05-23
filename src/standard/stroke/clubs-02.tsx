import React from "react";
const Clubs_02: React.FC<
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
        d="M12 2C9.79 2 8 3.853 8 6.139c0 .753.195 1.46.535 2.069C5.958 7.522 3 9.665 3 12.5c0 4.364 4.5 4.5 7 3.5 0 1.753-.384 2.737-1.488 4.3-.287.406-.228.945.228 1.144.613.267 1.647.556 3.26.556s2.648-.289 3.26-.556c.456-.2.515-.738.228-1.144C14.384 18.737 14 17.753 14 16c2.5 1 7 .864 7-3.5 0-2.835-2.958-4.978-5.535-4.292A4.23 4.23 0 0 0 16 6.138C16 3.854 14.21 2 12 2"
      />
    </svg>
  );
};
export default Clubs_02;
