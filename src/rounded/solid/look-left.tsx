import React from "react";
const LookLeft: React.FC<
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
        d="M22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12q0 .6.065 1.186c.019.171.028.257.084.326s.139.095.304.148c1.208.39 2.49.59 3.297.59 1.536 0 2.83-.372 3.585-.874a.75.75 0 1 1 .83 1.248c-1.07.713-2.68 1.126-4.415 1.126-.592 0-1.359-.084-2.174-.25-.495-.1-.742-.15-.857-.009-.114.142-.02.357.167.789A10.75 10.75 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75M9.25 9c0-.69-.557-1.25-1.245-1.25h-.01c-.687 0-1.245.56-1.245 1.25s.558 1.25 1.246 1.25h.009c.688 0 1.245-.56 1.245-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LookLeft;
