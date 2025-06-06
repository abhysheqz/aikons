import React from "react";
const Shield_01: React.FC<
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
        d="M10.915 1.498c.368-.14.73-.248 1.085-.248s.717.109 1.085.248c.373.14.839.347 1.42.605.853.379 1.98.814 3.188 1.157.882.251 1.595.454 2.135.663.543.21 1.035.472 1.366.91.321.425.445.921.501 1.456.055.517.055 1.165.055 1.95v2.944c0 3.056-1.38 5.48-3.047 7.286-1.662 1.8-3.642 3.025-4.947 3.714l-.063.033c-.556.294-1.01.534-1.693.534s-1.137-.24-1.693-.534l-.063-.033c-1.305-.69-3.285-1.914-4.947-3.714-1.668-1.807-3.047-4.23-3.047-7.286V8.24c0-.785 0-1.433.055-1.95.056-.535.18-1.031.5-1.456.332-.438.824-.7 1.367-.91.54-.21 1.253-.412 2.135-.663a25 25 0 0 0 3.188-1.157c.581-.258 1.047-.465 1.42-.605"
      />
    </svg>
  );
};
export default Shield_01;
