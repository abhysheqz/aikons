import React from "react";
const Matches: React.FC<
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
        d="M17.295 7.33c-.595-.08-1.345-.08-2.243-.08H8.948c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v6.104c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h6.104c.899 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.343.08-2.242v-6.104c0-.899 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726M15.5 16.276c0 1.74-1.486 3.15-3.32 3.15-2.56 0-4.046-2.625-3.602-5.175.057-.325.085-.487.148-.503s.192.148.451.475c.27.341.669.517 1.007.607.26.07.39.105.506.018.117-.087.121-.251.13-.579.024-.903.226-2.523 1.29-3.466.197-.175.295-.262.405-.224.11.037.14.194.2.507.19.988.79 1.665 1.386 2.336.703.793 1.399 1.578 1.399 2.854"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 9 4.25m3 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m3 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.934 1h4.132c.886 0 1.65 0 2.262.082.655.088 1.284.287 1.793.797.51.51.709 1.138.797 1.793C19 4.284 19 5.048 19 5.934V8a1 1 0 1 1-2 0V6c0-.971-.002-1.599-.064-2.061-.079-.585-.29-.796-.875-.875C15.6 3.002 14.971 3 14 3h-4c-.971 0-1.599.002-2.061.064-.585.079-.796.29-.875.875C7.002 4.4 7 5.029 7 6v2a1 1 0 1 1-2 0V5.934c0-.886 0-1.65.082-2.262.088-.655.287-1.284.797-1.793.51-.51 1.138-.709 1.793-.797C8.284 1 9.048 1 9.934 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Matches;
