import React from "react";
const Vynil_02: React.FC<
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
        d="M19.283.782a.75.75 0 0 1 .841.302c.086.129.15.276.195.385.028.067.06.15.092.232l.057.144c.104.26.223.53.389.788.314.492.81.968 1.766 1.127a.75.75 0 1 1-.246 1.48c-.943-.157-1.626-.54-2.127-1.006V9a3.25 3.25 0 1 1-1.5-2.739v-4.76a.75.75 0 0 1 .533-.719"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.228 3.468c.022.054.022.115.022.236v.303a.247.247 0 0 1-.25.243A4.75 4.75 0 0 0 12.3 9.7c.047.32.07.479.07.501 0 .234-.023.26-.254.296-.023.003-.22.003-.617.003a2 2 0 1 0 2 2c0-.094.128-.153.195-.088A4.73 4.73 0 0 0 17 13.75a4.74 4.74 0 0 0 3.483-1.52c.923-.995 1.385-1.493 1.575-1.42l.003.001c.189.076.189.614.189 1.69 0 5.936-4.813 10.75-10.75 10.75S.75 18.436.75 12.5C.75 6.562 5.563 1.75 11.5 1.75a10.7 10.7 0 0 1 5.504 1.513c.1.06.15.09.185.137q.025.031.039.067"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Vynil_02;
