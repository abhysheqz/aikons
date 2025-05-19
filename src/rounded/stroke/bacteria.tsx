import React from "react";
const Bacteria: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={15}
        cy={8}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 12.5.21.235c.388.436 1.044.317 1.29-.235s.902-.671 1.29-.235L9 12.5M15.841 18l.111-.345c.206-.641-.278-1.228-.952-1.155s-1.158-.514-.952-1.155l.11-.345"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.009 13H19M9.009 17H9M8.009 8H8"
      />
    </svg>
  );
};
export default Bacteria;
