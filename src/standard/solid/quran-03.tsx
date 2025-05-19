import React from "react";
const Quran_03: React.FC<
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
        d="M6.5 19a1 1 0 1 0 0 2h14a1 1 0 1 1 0 2h-14a3 3 0 1 1 0-6h14a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 4a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-14a1 1 0 0 0-1 1 1 1 0 1 1-2 0zm8.422 1.984a1 1 0 0 1-.34 1.373 2.23 2.23 0 1 0 3.062 3.062 1 1 0 1 1 1.713 1.031 4.23 4.23 0 1 1-5.807-5.807 1 1 0 0 1 1.372.34M14.5 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.832 17.445a1 1 0 0 1-.277 1.387C20.26 19.03 20 19.45 20 20s.259.97.555 1.168a1 1 0 0 1-1.11 1.664C18.545 22.232 18 21.16 18 20s.546-2.231 1.445-2.832a1 1 0 0 1 1.387.277"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quran_03;
