import React from "react";
const Nut: React.FC<
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
        d="M9.193 2.778c1.44-.913 5.396-1.74 9.083 1.947 3.686 3.687 2.86 7.643 1.947 9.082-.108.17-.23.301-.32.39-.537.538-1.399.979-2.366.735-1.697-.43-4.045-1.784-5.865-3.604S8.498 7.162 8.07 5.464c-.244-.966.197-1.828.734-2.366.09-.09.22-.211.39-.32"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.668 4.33c2.544-1.858 4.94-1.434 5.964-.598a1 1 0 0 1-1.266 1.549c-.201-.165-1.58-.752-3.518.664a1 1 0 0 1-1.18-1.615"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.677 6.066a15 15 0 0 0-2.67 1.832c-1.48 1.283-2.745 2.976-2.947 4.952-.207 2.019.167 3.499.469 4.65.313 1.196.457 1.807.228 2.472a1 1 0 0 0 1.271 1.271c.665-.229 1.276-.085 2.471.228 1.152.302 2.632.677 4.651.47 1.976-.203 3.67-1.468 4.952-2.947a15 15 0 0 0 1.832-2.67c-1.974-.564-4.429-2.04-6.323-3.934S7.24 8.04 6.677 6.066"
      />
    </svg>
  );
};
export default Nut;
