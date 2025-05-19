import React from "react";
const AiInnovation_03: React.FC<
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
        d="M12 3.194c-3.768 0-6.806 3.02-6.806 6.724 0 1.267.354 2.45.97 3.461L4.503 14.39A8.57 8.57 0 0 1 3.25 9.918C3.25 5.122 7.177 1.25 12 1.25s8.75 3.872 8.75 8.668a8.57 8.57 0 0 1-1.253 4.472l-1.66-1.01c.615-1.012.969-2.195.969-3.462 0-3.704-3.038-6.724-6.806-6.724"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 15.25h10c.241 0 .468.09.608.242.141.152.18.348.104.526l-1 2.333c-.103.238-.39.399-.712.399H8c-.323 0-.61-.16-.712-.399l-1-2.333a.48.48 0 0 1 .104-.526A.83.83 0 0 1 7 15.25M8.543 20l.746 2.237a.75.75 0 0 0 .711.513h4a.75.75 0 0 0 .711-.513L15.458 20z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 11.25a1.5 1.5 0 1 1 1.45-1.111l1.33 1.33c.141.141.22.332.22.531v4h-1.5v-3.69L8.639 11.2q-.187.049-.389.05M12.75 16v-4a.75.75 0 0 1 .22-.53l1.33-1.332a1.503 1.503 0 0 1 1.45-1.888 1.5 1.5 0 1 1-.389 2.95l-1.111 1.11V16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiInnovation_03;
