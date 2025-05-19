import React from "react";
const BodyPartSixPack: React.FC<
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
        d="M3.49 5.889a.9.9 0 0 1-.285-.648V3.25H1.25v1.99c0 .73.309 1.43.859 1.945l.693.65.468 2.342.7 2.452a7.3 7.3 0 0 1 .28 1.992v6.13h15.5v-6.13c0-.674.093-1.344.279-1.992l.7-2.452.469-2.341.693-.65c.55-.517.859-1.216.859-1.945V3.25h-1.954v1.99a.9.9 0 0 1-.287.649l-.81.76a1 1 0 0 1-.69.268H15.42c-.26 0-.508-.097-.692-.269l-.014-.014L12 4.297 9.285 6.634l-.014.014a1 1 0 0 1-.691.269H4.99c-.259 0-.507-.097-.69-.269zM10 13.75c.788 0 1.499-.331 2-.863a2.74 2.74 0 0 0 2 .863h1.75v-1.5H14c-.69 0-1.25-.56-1.25-1.25h-1.5c0 .69-.56 1.25-1.25 1.25H8.25v1.5zm2 4.137a2.74 2.74 0 0 1-2 .863H8.25v-1.5H10c.69 0 1.25-.56 1.25-1.25h1.5c0 .69.56 1.25 1.25 1.25h1.75v1.5H14a2.74 2.74 0 0 1-2-.863"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BodyPartSixPack;
