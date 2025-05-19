import React from "react";
const Quora: React.FC<
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
        d="M17.398 22.25c2.889 0 3.852-2.322 3.852-5.187-.963 1.037-3.633 3.207-4.815-1.038-1.444-5.187-5.685-4.275-8.185-1.775 3.852 0 4.383.898 5.296 3.85.963 3.113 2.408 4.15 3.852 4.15"
      />
      <path
        fill="currentColor"
        d="M15.874 12.415A8 8 0 0 0 16 11c0-3.314-2.015-6-4.5-6S7 7.686 7 11s2.015 6 4.5 6q.167 0 .332-.016c.153.358.318.836.52 1.486q.279.906.627 1.649-.72.13-1.479.13c-4.875 0-8.75-4.184-8.75-9.25 0-5.064 3.875-9.25 8.75-9.25s8.75 4.186 8.75 9.25a9.55 9.55 0 0 1-2.065 5.97c-.164-.23-.364-.622-.547-1.28-.385-1.383-.976-2.481-1.764-3.274"
      />
    </svg>
  );
};
export default Quora;
