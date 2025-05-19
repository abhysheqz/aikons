import React from "react";
const Shield_02: React.FC<
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
      <path fill="currentColor" d="M10 11.498a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.915 1.496c.368-.14.73-.248 1.085-.248s.717.109 1.085.248c.854.379 3.4 1.419 4.608 1.762l2.135.663c.543.21 1.035.472 1.366.91.321.425.445.921.501 1.456.055.517.055 1.165.055 1.95v2.944c0 3.056-1.38 5.48-3.047 7.286-1.662 1.8-3.705 3.058-5.01 3.747-.556.294-1.01.534-1.693.534s-1.137-.24-1.693-.534c-1.305-.689-3.348-1.947-5.01-3.747-1.668-1.806-3.047-4.23-3.047-7.286V8.237c0-.785 0-1.433.055-1.95.056-.535.18-1.03.5-1.456.332-.438.824-.7 1.367-.91l2.135-.663c1.208-.343 3.754-1.383 4.608-1.762M8 11.498a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Shield_02;
