import React from "react";
const TropicalStormTracks_02: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.027 12.539c1.216 0 2.202-.998 2.202-2.23s-.986-2.23-2.202-2.23-2.2.998-2.2 2.23.985 2.23 2.2 2.23Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.924 10.425c.19-6.064 6.923-6.989 10.834-6.195.066.014.08.105.024.143L11.15 6.154c1.19 1.44 1.906 2.25 1.98 4.048-.096 6.17-7.201 7.048-10.843 6.198-.065-.015-.077-.103-.021-.141l2.638-1.786c-1.19-1.439-1.906-2.25-1.98-4.048ZM11.866 19.986h7.302a.1.1 0 0 0 .099-.1V7.626m-2.47 1.87 2.47-2.512 2.46 2.512"
      />
    </svg>
  );
};
export default TropicalStormTracks_02;
