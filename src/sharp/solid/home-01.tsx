import React from "react";
const Home_01: React.FC<
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
        d="M12.43 1.386a.75.75 0 0 0-.86 0l-10.002 7a.75.75 0 0 0-.306.756l2.501 13a.75.75 0 0 0 .737.608h15a.75.75 0 0 0 .736-.608l2.5-13a.75.75 0 0 0-.306-.756zm1.955 14.825c-.621.483-1.454.789-2.386.789s-1.765-.306-2.386-.79l-1.228 1.58c.978.76 2.245 1.21 3.614 1.21s2.636-.45 3.614-1.21z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_01;
