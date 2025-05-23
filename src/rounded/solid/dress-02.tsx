import React from "react";
const Dress_02: React.FC<
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
        d="M9.875 1.35a.75.75 0 0 1 .367.544c.125.87.718 1.853 1.758 2.304 1.04-.451 1.633-1.435 1.758-2.304a.75.75 0 0 1 1.02-.59l2.5 1a.75.75 0 0 1 .252 1.226c-.364.364-.444.653-.454.95a3.5 3.5 0 0 0 .049.61l.035.23c.029.183.062.392.085.594.126 1.083 0 1.946-.524 2.61-.497.627-1.252.936-1.977 1.185a.8.8 0 0 1-.244.041h-5a.8.8 0 0 1-.244-.04c-.725-.25-1.48-.559-1.977-1.187-.524-.663-.65-1.526-.524-2.61.023-.2.056-.41.085-.593l.035-.23c.036-.243.055-.436.05-.61-.01-.297-.091-.586-.455-.95a.75.75 0 0 1 .251-1.226l2.5-1a.75.75 0 0 1 .654.047"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 8.25a.75.75 0 0 1 .75.75v.053c0 .97 0 2.123-.579 3.282a.75.75 0 1 1-1.342-.67c.41-.82.421-1.646.421-2.665A.75.75 0 0 1 9 8.25m6 0a.75.75 0 0 1 .75.75c0 1.019.011 1.845.421 2.665a.75.75 0 1 1-1.342.67c-.58-1.159-.579-2.312-.579-3.282V9a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.407 11.25h5.184c.314 0 .605 0 .849.026.267.029.553.094.821.277.274.186.442.437.567.68.116.223.227.506.35.815l.011.031c.979 2.479 2.38 4.898 4.23 6.868.364.388.384.884.264 1.259a1.58 1.58 0 0 1-.716.876l-.005.003c-1.526.86-3.495.886-5.019.016a1.94 1.94 0 0 0-1.87-.002l-.005.003c-.557.314-1.335.648-2.069.648s-1.51-.334-2.069-.648l-.004-.003a1.94 1.94 0 0 0-1.87.002c-1.524.87-3.493.844-5.02-.016l-.004-.003a1.58 1.58 0 0 1-.716-.876c-.12-.375-.1-.87.264-1.259 1.85-1.97 3.251-4.39 4.23-6.868l.012-.03c.122-.31.233-.593.349-.817.125-.242.293-.493.566-.679.269-.183.554-.248.822-.277.244-.026.535-.026.848-.026"
      />
    </svg>
  );
};
export default Dress_02;
