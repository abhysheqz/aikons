import React from "react";
const Clothes: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 3c0 6 .5 12 4 12M10 3c0 6-.5 12-4 12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.033 2.895 3.011 1.094.852 8.919a1 1 0 0 1-.994 1.095l-2.288.005m-.58-11.113.58 11.113m-.58-11.113L14.532 2c-.247.482-.88 1.438-2.524 1.483-1.518.042-2.242-.996-2.488-1.485l-2.509.907m10.602 11.104.284 5.896A2 2 0 0 1 15.901 22H8.11a2 2 0 0 1-1.997-2.107l.316-5.907m.583-11.082L4.01 3.998l-.898 8.897a1 1 0 0 0 .999 1.1l2.318-.009m.583-11.082L6.43 13.986"
      />
    </svg>
  );
};
export default Clothes;
