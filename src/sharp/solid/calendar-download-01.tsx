import React from "react";
const CalendarDownload_01: React.FC<
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
        d="m17.5 22.75.914-.914h.086v-.086l2.914-2.914L20 17.422l-1.5 1.5v-5.586h-2v5.586l-1.5-1.5-1.414 1.414L16.5 21.75v.086h.086z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387V13H19.8V9.75H4.2v11.046h8.3v1.954H2.25V3.205h4.388V1.25z"
      />
    </svg>
  );
};
export default CalendarDownload_01;
