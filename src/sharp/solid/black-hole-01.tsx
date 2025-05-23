import React from "react";
const BlackHole_01: React.FC<
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
        d="M5.376 10.359C3.673 11.21 3 12.202 3 13s.673 1.79 2.376 2.641C7.02 16.463 9.36 17 12 17s4.98-.537 6.624-1.359C20.327 14.79 21 13.798 21 13s-.673-1.79-2.376-2.641C16.98 9.537 14.64 9 12 9s-4.98.537-6.624 1.359M4.482 8.57C6.457 7.582 9.117 7 12 7s5.543.582 7.518 1.57C21.434 9.528 23 11.037 23 13s-1.566 3.472-3.482 4.43C17.542 18.418 14.883 19 12 19s-5.543-.582-7.518-1.57C2.566 16.472 1 14.964 1 13s1.566-3.472 3.482-4.43"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.016 12.692a10 10 0 0 1-.805-.211c-1.071-.33-1.742-.755-2.041-1.118l-1.543 1.273c.662.802 1.768 1.378 2.995 1.756C8.88 14.78 10.39 15 12 15s3.121-.22 4.378-.607c1.227-.378 2.334-.954 2.995-1.756l-1.543-1.273c-.299.363-.97.787-2.041 1.118q-.38.117-.805.211a3 3 0 0 0-5.968 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m8.047 13.802-3-9.5 1.907-.603 3 9.5zm-1.754 5.491 2-2 1.415 1.415-2 2zM15.967 13.758l2-7.5-1.933-.516-2 7.5zm1.74 5.535-2-2-1.414 1.414 2 2zM11 11V2h2v9zm0 11v-4h2v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BlackHole_01;
