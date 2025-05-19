import React from "react";
const SignLanguageC: React.FC<
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
        d="M4 21v-6.606c0-2.628 0-3.941.359-5.09.51-1.635 2.315-3.382 3.714-4.4C8.968 4.253 11.448 3.703 13.5 3l4.235 1.37a1.49 1.49 0 0 1-1.087 2.775M10.109 8 13.5 6.5l3.148.645M12 21c.364-1.5 2.18-2.204 2.18-2.204.82-.296 2.023-.87 2.547-1.296l2.834-1.85c.629-.511.32-1.265-.248-1.641-1.834-1.217-3.594-.156-5.287.686-1.473.733-3.408-.333-3.408-1.971 0-2.235 3.487-3.267 5.267-2.558l2.194.643c.81.238 1.659-.231 1.872-1.034a1.46 1.46 0 0 0-.915-1.742l-2.388-.888"
      />
    </svg>
  );
};
export default SignLanguageC;
