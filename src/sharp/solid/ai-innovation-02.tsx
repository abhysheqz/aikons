import React from "react";
const AiInnovation_02: React.FC<
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
        d="M12 3.194c-3.768 0-6.806 3.02-6.806 6.724 0 1.268.354 2.45.97 3.461L4.503 14.39A8.57 8.57 0 0 1 3.25 9.918C3.25 5.122 7.177 1.25 12 1.25s8.75 3.872 8.75 8.668a8.57 8.57 0 0 1-1.253 4.472l-1.66-1.01c.615-1.011.969-2.194.969-3.462 0-3.704-3.038-6.724-6.806-6.724"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 15.25h10c.241 0 .468.09.608.242.141.152.18.348.104.526l-1 2.333c-.103.238-.39.399-.712.399H8c-.323 0-.61-.16-.712-.399l-1-2.333a.48.48 0 0 1 .104-.526A.83.83 0 0 1 7 15.25M8.543 20l.745 2.237a.75.75 0 0 0 .712.513h4a.75.75 0 0 0 .711-.513L15.458 20z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.493 6.25h1.515l2.467 6.168-1.392.557-.69-1.725H9.108l-.69 1.725-1.393-.557zm.215 3.5h1.085l-.543-1.356zm6.042-3.5v6.5h-1.5v-6.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiInnovation_02;
