import RobotoEot from '../../../assets/fonts/roboto/roboto-v29-latin-regular.eot';
import RobotoWoff from '../../../assets/fonts/roboto/roboto-v29-latin-regular.woff';
import RobotoWoff2 from '../../../assets/fonts/roboto/roboto-v29-latin-regular.woff2';
import RobotoTtf from '../../../assets/fonts/roboto/roboto-v29-latin-regular.ttf';
import RobotoSvg from '../../../assets/fonts/roboto/roboto-v29-latin-regular.svg';

import GoogleSansEot from '../../../assets/fonts/google-sans/GoogleSans-Regular.eot';
import GoogleSansWoff from '../../../assets/fonts/google-sans/GoogleSans-Regular.woff';
import GoogleSansWoff2 from '../../../assets/fonts/google-sans/GoogleSans-Regular.woff2';
import GoogleSansTtf from '../../../assets/fonts/google-sans/GoogleSans-Regular.ttf';
import GoogleSansSvg from '../../../assets/fonts/google-sans/GoogleSans-Regular.svg';

export const Fonts = `
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: url(${RobotoEot}); /* IE9 Compat Modes */
      src: local('Roboto Regular'), local('Roboto-Regular'),
           url(${RobotoWoff2}) format('woff2'), /* Super Modern Browsers */
           url(${RobotoWoff}) format('woff'), /* Modern Browsers */
           url(${RobotoTtf}) format('truetype'), /* Safari, Android, iOS */
           url(${RobotoSvg}) format('svg'); /* Legacy iOS */
    }

    @font-face {
      font-family: 'Google Sans';
      font-style: normal;
      font-weight: 400;
      src: url(${GoogleSansEot}); /* IE9 Compat Modes */
      src: local('Google Sans Regular'), local('GoogleSans-Regular'),
           url(${GoogleSansWoff2}) format('woff2'), /* Super Modern Browsers */
           url(${GoogleSansWoff}) format('woff'), /* Modern Browsers */
           url(${GoogleSansTtf}) format('truetype'), /* Safari, Android, iOS */
           url(${GoogleSansSvg}) format('svg'); /* Legacy iOS */
    }
`;
