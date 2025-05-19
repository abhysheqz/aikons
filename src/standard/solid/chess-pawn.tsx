import React from "react";
const ChessPawn: React.FC<
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
        d="M12 1.012a4.25 4.25 0 0 0-3.307 6.92c.335.414.827.58 1.266.58h4.082c.44 0 .931-.166 1.266-.581A4.25 4.25 0 0 0 12 1.011m4 10.369h-.71c.135 2.174.629 4.154 1.817 5.619h.157a3 3 0 0 1 2.683 1.658l.447.895c.07.139.106.292.106.447v2a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-2a1 1 0 0 1 .106-.447l.447-.895A3 3 0 0 1 6.736 17h.157c1.188-1.465 1.682-3.445 1.816-5.62H8a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2M5.842 19.553A1 1 0 0 1 6.736 19h10.528a1 1 0 0 1 .894.553l.342.683V21h-13v-.764z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChessPawn;
