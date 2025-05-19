import React from "react";
const Home_03: React.FC<
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
        d="M12.432 1.386a.75.75 0 0 0-.86 0l-10.002 7a.75.75 0 0 0-.306.756l2.501 13a.75.75 0 0 0 .737.608H8.25l.003-7.5h7.496v7.5h3.752a.75.75 0 0 0 .736-.608l2.5-13a.75.75 0 0 0-.306-.756zM14.25 22.75v-6H9.753l-.002 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_03;
