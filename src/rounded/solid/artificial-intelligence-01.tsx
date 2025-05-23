import React from "react";
const ArtificialIntelligence_01: React.FC<
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
        d="M5.5 1.25a.75.75 0 0 1 .75.75v1.25h1.5V2a.75.75 0 0 1 1.5 0v1.3c.34.053.694.169.987.463.294.293.41.647.462.987H12a.75.75 0 0 1 0 1.5h-1.25v1.5H12a.75.75 0 0 1 0 1.5h-1.3c-.053.34-.169.694-.463.987-.293.294-.647.41-.987.462V12a.75.75 0 0 1-1.5 0v-1.25h-1.5V12a.75.75 0 0 1-1.5 0v-1.3c-.34-.053-.694-.169-.987-.463-.294-.293-.41-.647-.462-.987H2a.75.75 0 0 1 0-1.5h1.25v-1.5H2a.75.75 0 0 1 0-1.5h1.3c.053-.34.169-.694.463-.987.293-.294.647-.41.987-.462V2a.75.75 0 0 1 .75-.75"
      />
      <path
        fill="currentColor"
        d="M2.271 10.883a8.99 8.99 0 0 0 3.479 6.491V22c0 .414.335.75.75.75H16a.75.75 0 0 0 .75-.75v-.5c0-.67.6-1.37 1.504-1.817 1.05-.519 2.143-1.47 2.287-2.769l.159-1.426 1.635-.817a.75.75 0 0 0 .289-1.087l-2.377-3.565a9 9 0 0 0-9.704-8.742c.133.316.207.655.207.991a3 3 0 0 1 .981.982c1.243 0 2.519 1.007 2.519 2.25 0 .576-.217 1.102-.573 1.5.356.398.573.924.573 1.5 0 1.243-1.276 2.25-2.519 2.25a3 3 0 0 1-.981.982c0 1.242-1.008 2.518-2.25 2.518a2.24 2.24 0 0 1-1.5-.573 2.24 2.24 0 0 1-1.5.573c-1.243 0-2.25-1.276-2.25-2.518a3 3 0 0 1-.549-.434l-.166-.159c-.09-.083-.184-.17-.264-.256"
      />
    </svg>
  );
};
export default ArtificialIntelligence_01;
