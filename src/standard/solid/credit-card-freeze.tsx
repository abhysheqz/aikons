import React from "react";
const CreditCardFreeze: React.FC<
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
        d="M17.25 11a.75.75 0 0 1 .75.75v.766l.592-.307a.75.75 0 1 1 .69 1.332L18 14.206V15.5h1.294l.665-1.283a.75.75 0 0 1 1.332.69l-.307.593h.766a.75.75 0 0 1 0 1.5h-.766l.307.592a.75.75 0 1 1-1.332.69L19.294 17H18v1.294l1.283.665a.75.75 0 1 1-.69 1.332L18 19.984v.766a.75.75 0 0 1-1.5 0v-.766l-.592.307a.75.75 0 1 1-.69-1.332l1.282-.665V17h-1.294l-.665 1.283a.75.75 0 0 1-1.332-.69l.307-.593h-.766a.75.75 0 0 1 0-1.5h.766l-.307-.592a.75.75 0 1 1 1.332-.69l.665 1.282H16.5v-1.294l-1.283-.665a.75.75 0 1 1 .69-1.332l.593.307v-.766a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1 4.75A2.75 2.75 0 0 1 3.75 2h16a2.75 2.75 0 0 1 2.75 2.75V7H1zM1 8.5h21.5v4.818a2.24 2.24 0 0 0-1.37-.948 2.247 2.247 0 0 0-1.922-1.728 2.25 2.25 0 0 0-3.916 0 2.25 2.25 0 0 0-1.922 1.728 2.25 2.25 0 0 0-1.729 1.922 2.25 2.25 0 0 0 0 3.916c.059.48.272.937.614 1.292H3.75A2.75 2.75 0 0 1 1 16.75z"
      />
    </svg>
  );
};
export default CreditCardFreeze;
