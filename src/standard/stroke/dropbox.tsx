import React from "react";
const Dropbox: React.FC<
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
        d="M17.5 9.503 12 6.5 6.5 9.503 12 12.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.459 3.229 12 6.5l3.541-3.271a1.17 1.17 0 0 1 1.31-.053l3.604 2.262c.6.377.662 1.181.128 1.636L17.5 9.418l3.15 2.402a.96.96 0 0 1-.102 1.555l-3.685 2.435c-.413.273-.971.25-1.356-.058L12 12.657l-3.507 3.095a1.17 1.17 0 0 1-1.356.058l-3.685-2.435a.96.96 0 0 1-.102-1.555L6.5 9.418 3.417 7.074c-.534-.455-.471-1.26.128-1.636l3.603-2.262a1.17 1.17 0 0 1 1.31.053"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 15.5v2a1 1 0 0 0 .553.895l5 2.5a1 1 0 0 0 .895 0l5-2.5A1 1 0 0 0 18 17.5v-2"
      />
    </svg>
  );
};
export default Dropbox;
