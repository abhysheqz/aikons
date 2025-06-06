import React from "react";
const HandBag_02: React.FC<
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
        d="M11.54 7.008H4.399a.8.8 0 0 0-.214 0c.001 3.16.919 4.912 1.752 5.864a4.5 4.5 0 0 0 1.14.95 3 3 0 0 0 .432.205l.013.004a.75.75 0 0 1-.418 1.44l-.03-.009.028.009-.004-.001-.006-.002-.018-.006-.051-.017a4.501 4.501 0 0 1-.69-.321 6 6 0 0 1-1.525-1.264c-.655-.748-1.28-1.8-1.68-3.257L2.037 18.22a3.75 3.75 0 0 0 3.713 4.28h13.081a3.75 3.75 0 0 0 3.713-4.28l-1.089-7.62c-.4 1.459-1.026 2.51-1.681 3.26a6 6 0 0 1-1.524 1.265 4.5 4.5 0 0 1-.691.32q-.03.011-.051.017l-.018.006-.007.002h-.003s.027-.008-.002.001a.75.75 0 0 1-.419-1.44l.013-.004.083-.032c.079-.032.2-.087.35-.173a4.5 4.5 0 0 0 1.14-.95c.833-.952 1.75-2.704 1.752-5.864a.8.8 0 0 0-.212 0H13.04V14h.25c.966 0 1.75.784 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75v-1c0-.966.783-1.75 1.75-1.75h.25z"
      />
      <path
        fill="currentColor"
        d="M12.286 15.5h-.995a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h2a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25h-1.005"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.29 2.5c-2.136 0-4.212 2.012-4.758 5.856l-1.485-.212C6.64 3.972 9.057 1 12.289 1s5.65 2.972 6.243 7.144l-1.485.212C16.5 4.512 14.425 2.5 12.289 2.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HandBag_02;
