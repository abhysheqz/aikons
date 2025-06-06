import React from "react";
const HandPointingRight_01: React.FC<
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
        d="M20.25 8.25a2.5 2.5 0 0 1 0 5h-4.998c-.063 1.864-.638 4.57-2.685 6.603-.942.936-2.32.992-3.46.82-1.177-.175-2.343-.626-3.12-.998-.213-.12-1.107-.6-1.31-.702-.433-.217-.777-.33-1.059-.33-.265 0-.536 0-.74-.018-.219-.018-.459-.06-.694-.185a1.75 1.75 0 0 1-.732-.732 1.8 1.8 0 0 1-.185-.694c-.017-.204-.017-.448-.017-.713v-5.584c0-.308 0-.592.023-.827.026-.257.127-.72.389-.982.227-.27.559-.42.832-.525.291-.114.677-.234 1.14-.378.308-.11.698-.345 1.49-.944l4.33-3.277a2.53 2.53 0 0 1 3.1-.007 2.4 2.4 0 0 1 .337 3.503l-1.015.97z"
      />
    </svg>
  );
};
export default HandPointingRight_01;
