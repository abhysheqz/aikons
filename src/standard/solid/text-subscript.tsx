import React from "react";
const TextSubscript: React.FC<
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
        d="M4 3a2 2 0 0 0-2 2v1.5a1 1 0 0 0 2 0V5h5v14H7.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H11V5h5v1.5a1 1 0 1 0 2 0V5a2 2 0 0 0-2-2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.186 15.24c-.173.129-.186.231-.186.26a1 1 0 1 1-2 0c0-.8.434-1.447.986-1.86.55-.414 1.266-.64 2.014-.64s1.463.226 2.014.64c.552.413.986 1.06.986 1.86 0 .926-.407 1.613-.932 2.118-.483.464-1.099.802-1.576 1.064l-.01.006a24 24 0 0 0-.557.312H21a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1c0-.912.432-1.573.954-2.046.452-.41 1.026-.724 1.48-.972l.085-.047c.52-.286.9-.506 1.163-.76.225-.215.318-.408.318-.675 0-.029-.013-.131-.186-.26-.173-.13-.457-.24-.814-.24s-.641.11-.814.24"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextSubscript;
