import React from "react";
const Quran_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.832 17.445a1 1 0 0 1-.277 1.387C20.26 19.03 20 19.45 20 20s.259.97.555 1.168a1 1 0 0 1-1.11 1.664C18.545 22.232 18 21.16 18 20s.546-2.231 1.445-2.832a1 1 0 0 1 1.387.277"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 19a1 1 0 1 0 0 2h14a1 1 0 1 1 0 2h-14a3 3 0 1 1 0-6h14a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 1a3 3 0 0 0-3 3v16a1 1 0 1 0 2 0 1 1 0 0 1 1-1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm6.32 4.616a.5.5 0 0 0-.64 0l-1.061.884H9.5A.5.5 0 0 0 9 7v1.619l-.884 1.06a.5.5 0 0 0 0 .641L9 11.381V13a.5.5 0 0 0 .5.5h1.619l1.06.884a.5.5 0 0 0 .641 0l1.061-.884H15.5a.5.5 0 0 0 .5-.5v-1.619l.884-1.06a.5.5 0 0 0 0-.641L16 8.619V7a.5.5 0 0 0-.5-.5h-1.619z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quran_02;
