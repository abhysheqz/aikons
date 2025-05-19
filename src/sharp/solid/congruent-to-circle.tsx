import React from "react";
const CongruentToCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8.4 9.44c.308-.637.763-.893 1.214-.934.485-.043 1.109.153 1.69.716l.002-.002c.919.89 2.094 1.374 3.258 1.27 1.199-.108 2.244-.829 2.836-2.055l-1.8-.87c-.308.636-.763.892-1.214.933-.485.043-1.109-.153-1.69-.716l-.002.002c-.919-.89-2.094-1.375-3.258-1.27-1.199.108-2.244.829-2.836 2.055zm-.9 4.562h9v-2h-9zm0 3.498h9v-2h-9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CongruentToCircle;
