import React from "react";
const TextSuperscript: React.FC<
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
        d="M1 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.5a1 1 0 1 1-2 0V5h-5v14h1.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2H8V5H3v1.5a1 1 0 0 1-2 0zM19.186 9.24c-.173.129-.186.231-.186.26a1 1 0 1 1-2 0c0-.8.434-1.447.986-1.86C18.536 7.225 19.252 7 20 7s1.463.226 2.014.64c.552.413.986 1.06.986 1.86 0 .926-.407 1.613-.932 2.118-.483.464-1.099.802-1.576 1.064l-.01.006a24 24 0 0 0-.557.312H22a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1c0-.912.432-1.573.954-2.046.452-.41 1.026-.724 1.48-.972l.085-.047c.52-.286.9-.506 1.163-.76.225-.214.318-.408.318-.675 0-.029-.013-.131-.186-.26C20.641 9.11 20.357 9 20 9s-.641.11-.814.24"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextSuperscript;
