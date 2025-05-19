import React from "react";
const Metro: React.FC<
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
        d="M5.258 3.144a.75.75 0 0 1 .743-.644h12a.75.75 0 0 1 .742.644l2.001 14a.75.75 0 0 1-.742.856H4a.75.75 0 0 1-.743-.856zM6.651 4 4.866 16.5h14.271L17.35 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.605 20.856 2.001-4.053 1.79.894-2.003 4.053zm15 .894-1.998-4.053 1.788-.894 1.999 4.053z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 2.25a1 1 0 0 0-.99.859l-2 14a1 1 0 0 0 .99 1.14h16a1 1 0 0 0 .99-1.14l-2.001-14a1 1 0 0 0-.99-.86zm-.028 8.25.893-6.25H17.13l.893 6.25zm4.036 2.875H8v2h2.01zm5.991 0H13.99v2H16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Metro;
