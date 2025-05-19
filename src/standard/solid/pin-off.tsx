import React from "react";
const PinOff: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.285 6.869a6.75 6.75 0 0 0-3.012 1.518l-.965.845a1.75 1.75 0 0 0-.084 2.554l3.288 3.288-5.22 5.22a1 1 0 1 0 1.415 1.413l5.219-5.218 3.286 3.286a1.75 1.75 0 0 0 2.555-.085l.848-.97a6.75 6.75 0 0 0 1.515-3.007zM17.07 13.531c.065.066.176.014.164-.078a7 7 0 0 0-.08-.5l-.282-1.409a.25.25 0 0 1 .117-.263l3.91-2.346c.514-.309.881-.893.822-1.566-.124-1.406-.667-2.624-1.567-3.524s-2.119-1.443-3.524-1.567c-.673-.06-1.258.308-1.566.822l-2.346 3.91a.25.25 0 0 1-.264.117l-1.41-.282a7 7 0 0 0-.498-.08c-.092-.012-.144.099-.078.165z"
      />
    </svg>
  );
};
export default PinOff;
