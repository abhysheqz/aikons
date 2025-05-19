import React from "react";
const Lantern: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.686 17.919A1 1 0 0 1 6.5 17.5h12a1 1 0 0 1 .946 1.324c-.86 2.509-3.262 4.176-5.94 4.176h-2.011c-2.679 0-5.081-1.667-5.94-4.176a1 1 0 0 1 .131-.905M8.203 19.5c.79.926 1.983 1.5 3.292 1.5h2.01a4.32 4.32 0 0 0 3.292-1.5zM23.394 10.053a1 1 0 0 0-1.342-.447l-1 .5a1 1 0 0 0 .895 1.789l1-.5a1 1 0 0 0 .447-1.342m-2.789 4.5a1 1 0 0 0 .447 1.342l1 .5a1 1 0 1 0 .895-1.79l-1-.5a1 1 0 0 0-1.342.448M1.606 10.053a1 1 0 0 1 1.341-.447l1 .5a1 1 0 1 1-.894 1.788l-1-.5a1 1 0 0 1-.447-1.341m2.788 4.5a1 1 0 0 1-.447 1.341l-1 .5a1 1 0 1 1-.894-1.788l1-.5a1 1 0 0 1 1.341.447"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 6.75a.75.75 0 0 0-.53 1.28l.78.78v8.38l-.78.78a.75.75 0 0 0 .53 1.28h14a.75.75 0 0 0 .53-1.28l-.78-.78V8.81l.78-.78a.75.75 0 0 0-.53-1.28zm8 5.25a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.495 3C8.816 3 6.414 4.667 5.554 7.176A1 1 0 0 0 6.5 8.5h12a1 1 0 0 0 .946-1.324C18.586 4.667 16.184 3 13.506 3H13.5V2a1 1 0 1 0-2 0v1zM12.5 5h1.005c1.309 0 2.502.574 3.292 1.5H8.203A4.32 4.32 0 0 1 11.495 5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Lantern;
