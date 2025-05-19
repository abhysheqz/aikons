import React from "react";
const Touchpad_03: React.FC<
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
        d="M6.002 18H2V2h20v8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.399 21.99v-1.302l-3.94-5.374c-.021-.028-.063-.09-.086-.119a1.72 1.72 0 0 1-.361-1.272c.082-.68.599-1.199 1.288-1.294.405-.056.83.028 1.2.35l1.941 1.97V7.33c0-.735.577-1.331 1.323-1.331.747 0 1.279.596 1.279 1.33v3.004m2.66 3.636-.017-2.176a2.3 2.3 0 0 0-.107-.593m0 0c-.1-.312-.31-.575-.792-.736a1 1 0 0 0-.225-.043l-.978-.088h-.541m2.536.867 1.452.072c.773 0 1.314.669 1.328 1.358m0 1.765v-1.765m0 0h1.499c.76.108 1.123.787 1.123 1.494l.02 2.048c-.028.579-.017 1.701-.234 2.385a2.1 2.1 0 0 1-.387.7l-1.126 1.444v1.294m-6.211-11.662v3.151"
      />
    </svg>
  );
};
export default Touchpad_03;
