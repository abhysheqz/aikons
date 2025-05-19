import React from "react";
const ChatBot: React.FC<
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
        d="M9.75 3.5a2.25 2.25 0 1 1 3 2.122V8h-1.5V5.622A2.25 2.25 0 0 1 9.75 3.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 7.25a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h3.25V22a.75.75 0 0 0 1.166.624l2.81-1.874H19a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75zM8.25 11v2h1.5v-2zm6 0v2h1.5v-2zM9.5 16l-.576.48v.001l.002.002.002.002.006.007.015.017.047.051q.057.061.158.154c.135.12.33.276.585.43.513.307 1.27.606 2.26.606.991 0 1.748-.299 2.262-.607a3.8 3.8 0 0 0 .743-.583l.047-.05.015-.018.006-.007.002-.002.001-.002L14.5 16l-.576-.48v-.001l.001-.001.002-.002.002-.002v-.001l-.011.013-.076.073a2.3 2.3 0 0 1-.353.258c-.32.192-.813.393-1.49.393-.675 0-1.169-.201-1.488-.393a2.3 2.3 0 0 1-.429-.331l-.012-.013.003.003.001.002h.001v.001z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 10.75H2a.75.75 0 0 0-.75.75v5c0 .414.335.75.75.75h1zM21 17.25h1a.75.75 0 0 0 .75-.75v-5a.75.75 0 0 0-.75-.75h-1z"
      />
    </svg>
  );
};
export default ChatBot;
