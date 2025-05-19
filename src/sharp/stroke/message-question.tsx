import React from "react";
const MessageQuestion: React.FC<
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
        strokeWidth={1.5}
        d="M10.411 9.552c0-.851.665-1.541 1.485-1.541s1.484.69 1.484 1.541c0 .307-.086.593-.235.833-.443.716-1.25 1.399-1.25 2.25v.386"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.896 15.024h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.872 2.514c-7.744.907-9.966 9.644-6.258 14.983l-1.457 3.802a.1.1 0 0 0 .125.13l4.146-1.383c1.934 1.287 8.56 1.582 10.869.005 2.944-1.504 5.791-5.332 4.01-11.858-.416-1.529-2.582-5.543-7.94-5.691m-3.495.012q.243-.014.491-.014m-.49.014 3.494-.012m0 0 .43-.002m-.43.002-.06-.002"
      />
    </svg>
  );
};
export default MessageQuestion;
