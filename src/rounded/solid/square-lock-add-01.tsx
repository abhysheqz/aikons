import React from "react";
const SquareLockAdd_01: React.FC<
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
        d="M10.5 3.25A3.5 3.5 0 0 0 7 6.75v2.5a1 1 0 0 1-2 0v-2.5a5.5 5.5 0 1 1 11 0v2.5a1 1 0 1 1-2 0v-2.5a3.5 3.5 0 0 0-3.5-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.5 8.25a96 96 0 0 0-4.475.1c-2.058.095-3.729 1.688-4 3.705-.149 1.1-.275 2.257-.275 3.445s.126 2.344.275 3.445c.271 2.017 1.942 3.61 4 3.705 1.429.066 2.88.1 4.475.1 1.266 0 2.44-.021 3.584-.063.347-.013.521-.02.606-.11s.077-.307.062-.738l-.002-.089v-.9c0-.283 0-.424-.088-.512s-.23-.088-.512-.088h-.9a2.5 2.5 0 0 1 0-5h.9c.283 0 .424 0 .512-.088s.088-.23.088-.512v-.9a2.5 2.5 0 0 1 2.61-2.498c.823.036 1.234.054 1.324-.105s-.06-.393-.364-.86a4.22 4.22 0 0 0-3.345-1.937 96 96 0 0 0-4.475-.1"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.25 12.75a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareLockAdd_01;
