import React from "react";
const SunCloudLittleSnow_01: React.FC<
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
        d="M10.418 15.168a1 1 0 0 1 1.414 0l.293.293.293-.293a1 1 0 0 1 1.414 1.414l-.293.293.293.293a1 1 0 0 1-1.414 1.414l-.293-.293-.293.293a1 1 0 0 1-1.414-1.414l.293-.293-.293-.293a1 1 0 0 1 0-1.414m-4 4a1 1 0 0 1 1.414 0l.293.293.293-.293a1 1 0 0 1 1.414 1.414l-.293.293.293.293a1 1 0 0 1-1.414 1.414l-.293-.293-.293.293a1 1 0 0 1-1.414-1.414l.293-.293-.293-.293a1 1 0 0 1 0-1.414m8 0a1 1 0 0 1 1.414 0l.293.293.293-.293a1 1 0 0 1 1.414 1.414l-.293.293.293.293a1 1 0 0 1-1.414 1.414l-.293-.293-.293.293a1 1 0 0 1-1.414-1.414l.293-.293-.293-.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.375 13.125a5.75 5.75 0 0 1 4.208-5.54c.196-.055.294-.082.35-.14.057-.058.082-.156.131-.352a6.252 6.252 0 0 1 12.272.831c.027.246.041.368.104.44.062.07.184.1.427.159a5.252 5.252 0 0 1 .867 9.911c-.188.083-.282.124-.377.103-.095-.02-.184-.12-.36-.32a2.5 2.5 0 0 0-2.665-.713 1 1 0 0 1-.177.05.2.2 0 0 1-.06 0c-.033-.002-.081-.018-.177-.05-.146-.05-.22-.074-.258-.102a.2.2 0 0 1-.062-.062c-.028-.038-.053-.112-.102-.258-.032-.096-.048-.144-.05-.177a.2.2 0 0 1 0-.06c.003-.034.018-.081.05-.176a2.5 2.5 0 0 0-3.126-3.178c-.132.042-.199.063-.245.063s-.113-.02-.245-.063a2.5 2.5 0 0 0-3.126 3.178c.032.095.047.142.05.176a.2.2 0 0 1 0 .06c-.003.033-.018.081-.05.177-.05.146-.074.22-.102.258a.2.2 0 0 1-.062.062c-.038.028-.112.053-.258.102-.096.031-.144.047-.177.05a.2.2 0 0 1-.06 0 1 1 0 0 1-.176-.05 2.5 2.5 0 0 0-2.562.603l-.008.008c-.186.188-.279.282-.374.298s-.187-.029-.37-.119a5.75 5.75 0 0 1-3.23-5.169"
      />
      <path
        fill="currentColor"
        d="M3.125 5.982a2.85 2.85 0 0 1 2.844-2.857c.78 0 1.488.315 2.003.829a6.3 6.3 0 0 1 1.715-1.086 4.83 4.83 0 0 0-3.718-1.743 4.85 4.85 0 0 0-4.844 4.857c0 1.393.586 2.65 1.523 3.535a5.8 5.8 0 0 1 1.52-1.324 2.85 2.85 0 0 1-1.043-2.211"
      />
    </svg>
  );
};
export default SunCloudLittleSnow_01;
