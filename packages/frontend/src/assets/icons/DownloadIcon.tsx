import { IStyledIcon } from "../../types/icon.types";

export const DownloadIcon = ({ color, size }: IStyledIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="47" height="47" rx="4.5" stroke={color} />
      <path
        d="M32.0462 35.185H15.9537C15.174 35.2289 14.4085 34.9634 13.8234 34.4461C13.2383 33.9289 12.8808 33.2017 12.8287 32.4225V18.6725C12.8805 17.8931 13.2378 17.1655 13.8229 16.648C14.4081 16.1305 15.1738 15.8649 15.9537 15.9087H16.5312C16.697 15.9087 16.856 15.9746 16.9732 16.0918C17.0904 16.209 17.1562 16.368 17.1562 16.5337C17.1562 16.6995 17.0904 16.8585 16.9732 16.9757C16.856 17.0929 16.697 17.1587 16.5312 17.1587H15.9537C15.5055 17.1164 15.0584 17.2511 14.7081 17.5339C14.3577 17.8168 14.1319 18.2254 14.0787 18.6725V32.4225C14.1322 32.8694 14.3582 33.2777 14.7085 33.5603C15.0588 33.8428 15.5057 33.9773 15.9537 33.935H32.0462C32.4943 33.9773 32.9412 33.8428 33.2915 33.5603C33.6418 33.2777 33.8678 32.8694 33.9212 32.4225V18.6725C33.8681 18.2254 33.6422 17.8168 33.2919 17.5339C32.9415 17.2511 32.4945 17.1164 32.0462 17.1587H31.4687C31.303 17.1587 31.144 17.0929 31.0268 16.9757C30.9096 16.8585 30.8437 16.6995 30.8437 16.5337C30.8437 16.368 30.9096 16.209 31.0268 16.0918C31.144 15.9746 31.303 15.9087 31.4687 15.9087H32.0462C32.8262 15.8649 33.5919 16.1305 34.177 16.648C34.7622 17.1655 35.1194 17.8931 35.1712 18.6725V32.4225C35.1191 33.2017 34.7617 33.9289 34.1766 34.4461C33.5915 34.9634 32.826 35.2289 32.0462 35.185Z"
        fill={color}
      />
      <path
        d="M28.1937 22.24L24.4437 25.99C24.3283 26.1078 24.1711 26.1752 24.0062 26.1775C23.9226 26.1774 23.8398 26.1608 23.7625 26.1287C23.6853 26.0965 23.6152 26.0494 23.5562 25.99L19.8062 22.24C19.6886 22.1223 19.6224 21.9627 19.6224 21.7963C19.6224 21.6298 19.6886 21.4702 19.8062 21.3525C19.9239 21.2348 20.0836 21.1687 20.25 21.1687C20.4164 21.1687 20.5761 21.2348 20.6937 21.3525L23.3687 24.0263V13.44C23.3713 13.275 23.438 13.1176 23.5547 13.0009C23.6713 12.8843 23.8288 12.8176 23.9937 12.815C24.1595 12.815 24.3185 12.8809 24.4357 12.9981C24.5529 13.1153 24.6187 13.2742 24.6187 13.44V24.0525L27.3062 21.3525C27.3645 21.2942 27.4337 21.248 27.5098 21.2165C27.586 21.1849 27.6676 21.1687 27.75 21.1687C27.8324 21.1687 27.914 21.1849 27.9901 21.2165C28.0663 21.248 28.1355 21.2942 28.1937 21.3525C28.252 21.4108 28.2982 21.48 28.3298 21.5561C28.3613 21.6322 28.3776 21.7138 28.3776 21.7963C28.3776 21.8787 28.3613 21.9603 28.3298 22.0364C28.2982 22.1125 28.252 22.1817 28.1937 22.24Z"
        fill={color}
      />
    </svg>
  );
};
