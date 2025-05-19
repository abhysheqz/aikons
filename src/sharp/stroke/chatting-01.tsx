import React from "react";
const Chatting_01: React.FC<
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
        strokeWidth={1.5}
        d="M8.984 18.857a17 17 0 0 1-1.613-.488l-3.58 1.58a.01.01 0 0 1-.014-.012l.915-3.32c-1.256-1.271-2.686-2.806-2.686-6.217-.183-4.997 5.24-8.652 9.095-8.388.894 0 1.895.242 2.738.446l.034.008c1.233.36 3.283 1.533 4.496 3.22 1.018 1.416 1.372 2.858 1.46 3.317"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.583 18.122c1.32-2.878-.691-6.12-3.452-6.901-2.62-.879-5.99.662-6.874 3.28-.885 2.617.45 5.845 3.596 6.661 1.621.544 2.892.165 3.32 0 .68.213 2.182.524 2.692.836.11.067-.071-.751-.222-2.48.26-.42.83-.82.94-1.396Z"
      />
    </svg>
  );
};
export default Chatting_01;
