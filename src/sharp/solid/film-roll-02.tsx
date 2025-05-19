import React from "react";
const FilmRoll_02: React.FC<
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
        d="M1.25 10.5a9.25 9.25 0 1 1 15.035 7.219l3.965-.01a2.51 2.51 0 0 1 2.5 2.52 2.51 2.51 0 0 1-2.5 2.521h-5.5v-2.017h5.5c.276 0 .5-.225.5-.504a.5.5 0 0 0-.5-.504l-9.75.025a9.25 9.25 0 0 1-9.25-9.25M9.414 8 7 5.586 5.586 7 8 9.414zM13 9.414 15.414 7 14 5.586 11.586 8zm-1.492.086H9.5v2h2.008zM7 15.414 9.414 13 8 11.586 5.586 14zM15.414 14 13 11.586 11.586 13 14 15.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FilmRoll_02;
