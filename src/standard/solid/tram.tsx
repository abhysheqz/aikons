import React from "react";
const Tram: React.FC<
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
        d="M4 2a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-4.465l-1.703 2.555a1 1 0 0 1-1.664-1.11L12.132 3H5a1 1 0 0 1-1-1M8.447 19.106a1 1 0 0 1 .447 1.341l-1 2a1 1 0 1 1-1.788-.894l1-2a1 1 0 0 1 1.341-.448m7.106 0a1 1 0 0 1 1.341.447l1 2a1 1 0 1 1-1.788.894l-1-2a1 1 0 0 1 .447-1.341"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 8v8.25h2.5a.75.75 0 0 1 0 1.5H4.07A4 4 0 0 0 8 21h8c1.953 0 3.579-1.4 3.93-3.25H17.5a.75.75 0 0 1 0-1.5H20V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4m4-2a2 2 0 0 0-2 2v4.25c1.811.492 3.717.75 5.563.75 1.858 0 4.45-.32 6.437-.78V8a2 2 0 0 0-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tram;
