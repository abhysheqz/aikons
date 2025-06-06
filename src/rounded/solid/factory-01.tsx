import React from "react";
const Factory_01: React.FC<
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
        d="M1.5 20.75a1 1 0 0 1 1-1h19a1 1 0 1 1 0 2h-19a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.25 8A.75.75 0 0 1 6 7.25h7a.75.75 0 0 1 .75.75c0 5.915.985 9.794 2.42 12.665a.75.75 0 0 1-.67 1.085h-12a.75.75 0 0 1-.67-1.085C4.264 17.794 5.25 13.915 5.25 8"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.5 10.75H17a1 1 0 0 1 1 1c0 3.732 1.392 6.478 3.207 8.293a1 1 0 0 1-1.414 1.414c-2.011-2.011-3.533-4.928-3.763-8.707H12.5zM19.583 2.25c1.11 0 2.042.684 2.73 1.646a1 1 0 0 1-1.626 1.163c-.483-.674-.885-.809-1.104-.809-.217 0-.614.132-1.086.804l-.006.008c-.457.635-1.121 1.168-1.966 1.187-.862.02-1.542-.501-2.002-1.155-.482-.672-.882-.807-1.104-.807s-.624.135-1.106.81a1 1 0 1 1-1.626-1.164c.688-.963 1.62-1.646 2.732-1.646s2.044.683 2.733 1.646l.004.007c.176.25.291.3.324.31.029-.008.17-.055.385-.353.68-.963 1.607-1.647 2.718-1.647m-3.093 2h-.006z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Factory_01;
