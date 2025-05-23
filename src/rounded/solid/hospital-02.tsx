import React from "react";
const Hospital_02: React.FC<
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
        d="M2 21.75a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.046 4.25c1.454.089 2.603.338 3.46 1.197.675.677.97 1.532 1.11 2.571.134 1.006.134 2.288.134 3.896v10.085a.75.75 0 0 1-.75.75h-5.454A.75.75 0 0 0 15.25 22v-2.532c0-.44 0-.82-.028-1.13-.03-.33-.096-.656-.273-.963a2.25 2.25 0 0 0-.824-.824c-.307-.177-.633-.243-.962-.273-.312-.028-.691-.028-1.13-.028-.44 0-.884 0-1.196.028-.329.03-.655.096-.962.273a2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962-.028.312-.028.691-.028 1.13V22a.75.75 0 0 0 .704.749H4a.75.75 0 0 1-.75-.75V11.914c0-1.608 0-2.89.135-3.896.139-1.039.434-1.894 1.109-2.57.857-.86 2.006-1.11 3.46-1.198v1.805c0 1.885 0 2.828.586 3.414s1.529.586 3.414.586h.092c1.885 0 2.828 0 3.414-.586s.586-1.529.586-3.414zM13.75 22a.75.75 0 0 0 .704.749H9.546A.75.75 0 0 0 10.25 22v-2.5c0-.481 0-.792.022-1.027.03-.234.15-.7.7-.7.236-.022.547-.023 1.028-.023s.792 0 1.027.022c.234.012.7.17.7.7.022.236.023.547.023 1.028zM8 12a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm3.991 0a1 1 0 0 0 0 2H12a1 1 0 1 0 0-2zm4.001 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.948 1.25h.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v.104c0 .898 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.344.08-2.242.08h-.104c-.899 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.725-.456-.456-.642-1.023-.726-1.65-.08-.595-.08-1.345-.08-2.243v-.104c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08M9.905 2.817c-.461.062-.659.169-.789.3s-.237.327-.3.788C8.753 4.388 8.75 5.036 8.75 6s.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095s-.002-1.612-.066-2.095c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.75a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75V4.5a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hospital_02;
