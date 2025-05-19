import React from "react";
const TextIndent_01: React.FC<
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
        d="M10.5 4.5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1M10.5 9.5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1M10.5 14.5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1M10.5 19.5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.233 13.781c.348.384.357 1.017.021 1.414l-.932 1.102c-.361.427-.731.865-1.04 1.141C5.937 17.745 5.524 18 5 18s-.938-.255-1.281-.562c-.31-.276-.642-.67-1.004-1.097l-.97-1.146a1.104 1.104 0 0 1 .022-1.414.82.82 0 0 1 .608-.281h5.25c.219 0 .438.093.608.281M8.233 10.219a1.104 1.104 0 0 0 .021-1.414l-.932-1.102c-.361-.427-.731-.865-1.04-1.141C5.937 6.255 5.524 6 5 6s-.938.255-1.281.562c-.31.276-.642.67-1.004 1.097l-.97 1.146a1.104 1.104 0 0 0 .022 1.414c.17.188.389.281.608.281h5.25a.82.82 0 0 0 .608-.281"
      />
    </svg>
  );
};
export default TextIndent_01;
