import React from "react";
const Kettle_01: React.FC<
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
        d="M1 8a2 2 0 0 1 2-2h4v2H3v4.586l3.707 3.707-1.414 1.414L1.586 14A2 2 0 0 1 1 12.586z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 4c-2.144 0-4.04 1.358-4.884 3.385l-1.846-.77C7.396 3.913 9.977 2 13 2s5.605 1.913 6.731 4.615l-1.846.77C17.04 5.358 15.145 4 13 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.948 8H7.5V6H22a1 1 0 0 1 1 1c0 2.728-.882 4.303-1.977 5.162a4 4 0 0 1-1.46.727 3.6 3.6 0 0 1-.664.108q-.031.003-.053.002h-.02l-.008.001h-.005s-.002 0-.002-1l-.001-1h-.015q-.005 0 0 0l.042-.004a2 2 0 0 0 .22-.042c.195-.05.462-.154.732-.366.418-.328.986-1.03 1.159-2.588"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.195 6a1 1 0 0 0-.923.615 8 8 0 0 0-.601 2.656l-.557 10.571A3 3 0 0 0 8.109 23h9.786a3 3 0 0 0 2.995-3.158l-.556-10.57a8 8 0 0 0-.6-2.657A1 1 0 0 0 18.81 6zM15 12a1 1 0 1 0-2 0c0 .637-.105.975-.207 1.178-.106.212-.245.36-.5.615l-.022.022c-.244.244-.592.591-.853 1.113C11.145 15.475 11 16.137 11 17a1 1 0 1 0 2 0c0-.637.105-.975.207-1.178.106-.212.245-.36.5-.615l.022-.022c.244-.244.592-.591.853-1.113.273-.547.418-1.209.418-2.072M13 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Kettle_01;
