import React from "react";
const PointingRight_02: React.FC<
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
        d="m3.72 10.25.13-.113c.211-.18.501-.427.818-.69.613-.51 1.385-1.13 1.851-1.414q.14-.085.296-.182c.43-.269.942-.588 1.465-.803.681-.281 1.486-.436 2.358-.133.489.17.977.513 1.403.87.438.366.867.796 1.24 1.2.46.498.851.972 1.085 1.265h5.884a2.5 2.5 0 1 1 0 5h-4.998c-.063 1.864-.638 4.569-2.685 6.603-.942.936-2.32.991-3.46.82-1.17-.175-2.33-.62-3.107-.992l-2.155-.931H2a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.793 1.293a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 1 1-1.414-1.414l.793-.793H16a1 1 0 1 1 0-2h3.586l-.793-.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingRight_02;
