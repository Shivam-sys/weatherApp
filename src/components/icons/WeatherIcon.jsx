import PropTypes from 'prop-types'

function WeatherIcon({ color, height, width, iconId }) {
  return (
    <>
      {iconId === '01d' && (
        <svg
          width={width || '24'}
          height={height || '24'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1418_13739)">
            <path
              d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 1V3"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 21V23"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.22 4.22L5.64 5.64"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.36 18.36L19.78 19.78"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 12H3"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 12H23"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.22 19.78L5.64 18.36"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.36 5.64L19.78 4.22"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1418_13739">
              <rect
                width={width || '24'}
                height={height || '24'}
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {iconId === '01n' && (
        <svg
          width={width || '24'}
          height={height || '24'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9677 13.7677L20.9642 13.8519C20.9967 13.4665 20.8041 13.0969 20.4696 12.9028C20.1351 12.7087 19.7187 12.7248 19.4002 12.9443L19.9677 13.7677ZM10.2323 4.03229L11.0557 4.59978C11.2752 4.28134 11.2913 3.86489 11.0972 3.53038C10.9031 3.19587 10.5335 3.00328 10.1481 3.03584L10.2323 4.03229ZM19.4002 12.9443C18.4341 13.6102 17.2641 14 16 14V16C17.6823 16 19.246 15.4796 20.5352 14.5911L19.4002 12.9443ZM16 14C12.6863 14 10 11.3137 10 8H8C8 12.4183 11.5817 16 16 16V14ZM10 8C10 6.73594 10.3898 5.56592 11.0557 4.59978L9.40893 3.46479C8.52035 4.75401 8 6.31775 8 8H10ZM3 13C3 8.81209 6.21866 5.37489 10.3165 5.02874L10.1481 3.03584C5.02351 3.46873 1 7.76397 1 13H3ZM11 21C6.58172 21 3 17.4183 3 13H1C1 18.5229 5.47715 23 11 23V21ZM18.9713 13.6835C18.6251 17.7813 15.1879 21 11 21V23C16.236 23 20.5313 18.9765 20.9642 13.8519L18.9713 13.6835Z"
            fill={color || '#FFFFFF'}
          />
          <path
            d="M18.5149 2.37873L18.164 2.291C17.8124 2.20307 17.4913 2.02125 17.235 1.76497C16.9788 1.5087 16.7969 1.1876 16.709 0.836L16.6213 0.485353C16.55 0.200108 16.2937 0 15.9997 0C15.706 0 15.4498 0.199749 15.3783 0.484653L15.29 0.836C15.2021 1.18748 15.0205 1.50849 14.7644 1.76475C14.5083 2.02102 14.1874 2.20291 13.836 2.291L13.4851 2.37873C13.2 2.45 13 2.70615 13 3C13 3.29385 13.2 3.55 13.4851 3.62127L13.836 3.709C14.1876 3.79693 14.5087 3.97875 14.765 4.23503C15.0212 4.4913 15.2031 4.8124 15.291 5.164L15.3787 5.51493C15.45 5.80001 15.7061 6 16 6C16.2939 6 16.55 5.80001 16.6213 5.51493L16.709 5.164C16.7969 4.8124 16.9788 4.4913 17.235 4.23503C17.4913 3.97875 17.8124 3.79693 18.164 3.709L18.5149 3.62127C18.8 3.55 19 3.29385 19 3C19 2.70615 18.8 2.45 18.5149 2.37873Z"
            fill={color || '#FFFFFF'}
          />
          <path
            d="M23.5149 7.37873L23.164 7.291C22.8124 7.20307 22.4913 7.02125 22.235 6.76497C21.9788 6.5087 21.7969 6.1876 21.709 5.836L21.6213 5.48535C21.55 5.20011 21.2937 5 20.9997 5C20.706 5 20.4498 5.19975 20.3783 5.48465L20.29 5.836C20.2021 6.18748 20.0205 6.50849 19.7644 6.76475C19.5083 7.02102 19.1874 7.20291 18.836 7.291L18.4851 7.37873C18.2 7.45 18 7.70615 18 8C18 8.29385 18.2 8.55 18.4851 8.62127L18.836 8.709C19.1876 8.79693 19.5087 8.97875 19.765 9.23503C20.0212 9.4913 20.2031 9.8124 20.291 10.164L20.3787 10.5149C20.45 10.8 20.7061 11 21 11C21.2939 11 21.55 10.8 21.6213 10.5149L21.709 10.164C21.7969 9.8124 21.9788 9.4913 22.235 9.23503C22.4913 8.97875 22.8124 8.79693 23.164 8.709L23.5149 8.62127C23.8 8.55 24 8.29385 24 8C24 7.70615 23.8 7.45 23.5149 7.37873Z"
            fill={color || '#FFFFFF'}
          />
        </svg>
      )}
      {(iconId === '02d' ||
        iconId === '02n' ||
        iconId === '03d' ||
        iconId === '03n') && (
        <svg
          width={width || 24}
          height={height || 24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1418_13738)">
            <path
              d="M18 10H16.74C16.3659 8.551 15.5928 7.23599 14.5086 6.2044C13.4245 5.1728 12.0727 4.46599 10.6069 4.16428C9.14113 3.86256 7.62009 3.97804 6.21665 4.49759C4.81321 5.01714 3.58364 5.91993 2.66765 7.10338C1.75166 8.28683 1.18599 9.70348 1.03491 11.1924C0.883824 12.6812 1.15339 14.1826 1.81298 15.526C2.47256 16.8693 3.49572 18.0007 4.76618 18.7916C6.03665 19.5824 7.50348 20.0011 9 20H18C19.3261 20 20.5979 19.4732 21.5355 18.5355C22.4732 17.5979 23 16.3261 23 15C23 13.6739 22.4732 12.4021 21.5355 11.4645C20.5979 10.5268 19.3261 10 18 10Z"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1418_13738">
              <rect
                width={width || '24'}
                height={height || '24'}
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {iconId === '04d' && (
        <svg
          width={width || '24'}
          height={height || '24'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.3855 7.67486C13.0856 6.09899 14.6645 5 16.5 5C18.9853 5 21 7.01472 21 9.5C21 10.7858 20.4607 11.9456 19.5961 12.7656C19.9875 12.9668 20.3496 13.2239 20.669 13.5314C20.8396 13.6956 20.9951 13.8715 21.1349 14.0571C22.2884 12.8841 23 11.2751 23 9.5C23 5.91015 20.0898 3 16.5 3C13.76 3 11.416 4.69532 10.4597 7.09423C10.5522 7.10899 10.6445 7.1255 10.7366 7.14374C11.3091 7.25719 11.8624 7.43609 12.3855 7.67486Z"
            fill={color || '#FFFFFF'}
          />
          <path
            d="M17.4558 12.25H16.3106C15.9706 10.9821 15.268 9.83149 14.2827 8.92885C13.2974 8.0262 12.0688 7.40774 10.7366 7.14374C9.40444 6.87974 8.02206 6.98079 6.74655 7.43539C5.47104 7.89 4.35355 8.67994 3.52106 9.71546C2.68857 10.751 2.17446 11.9905 2.03715 13.2933C1.89984 14.5961 2.14483 15.9098 2.74429 17.0852C3.34375 18.2606 4.27364 19.2506 5.4283 19.9426C6.58295 20.6346 7.91607 21.001 9.27618 21H17.4558C18.661 21 19.8168 20.5391 20.669 19.7186C21.5212 18.8981 22 17.7853 22 16.625C22 15.4647 21.5212 14.3519 20.669 13.5314C19.8168 12.7109 18.661 12.25 17.4558 12.25Z"
            stroke={color || '#FFFFFF'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {iconId === '04n' && (
        <svg
          width={width || '24'}
          height={height || '24'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4558 12.25H16.3106C15.9706 10.9821 15.268 9.83149 14.2827 8.92885C13.2974 8.0262 12.0688 7.40774 10.7366 7.14374C9.40444 6.87974 8.02206 6.98079 6.74655 7.43539C5.47104 7.89 4.35355 8.67994 3.52106 9.71546C2.68857 10.751 2.17446 11.9905 2.03715 13.2933C1.89984 14.5961 2.14483 15.9098 2.74429 17.0852C3.34375 18.2606 4.27364 19.2506 5.4283 19.9426C6.58295 20.6346 7.91607 21.001 9.27618 21H17.4558C18.661 21 19.8168 20.5391 20.669 19.7186C21.5212 18.8981 22 17.7853 22 16.625C22 15.4647 21.5212 14.3519 20.669 13.5314C19.8168 12.7109 18.661 12.25 17.4558 12.25Z"
            stroke={color || '#FFFFFF'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.1001 7.55175C12.4338 5.99575 13.572 4.7383 15.0581 4.23596C15.0198 4.48524 15 4.74043 15 5C15 7.76142 17.2386 10 20 10C20.2596 10 20.5147 9.98015 20.764 9.94186C20.4068 10.9986 19.6678 11.8795 18.7111 12.4202C19.4335 12.6202 20.0995 12.9913 20.6442 13.5077C22.0833 12.3155 23 10.5148 23 8.5L22.9998 8.45873C22.9976 8.10244 22.806 7.77423 22.4968 7.59716C22.1876 7.42009 21.8076 7.42091 21.4992 7.59931C21.0589 7.85395 20.548 8 20 8C18.3431 8 17 6.65685 17 5C17 4.45194 17.146 3.94103 17.4007 3.50081C17.5791 3.19239 17.5799 2.81235 17.4028 2.50317C17.2258 2.19398 16.8976 2.00235 16.5413 2.00013L16.5 2C13.4076 2 10.8195 4.15951 10.1617 7.05275C10.354 7.07562 10.5458 7.10594 10.7366 7.14374C11.206 7.23676 11.6625 7.37379 12.1001 7.55175Z"
            fill={color || '#FFFFFF'}
          />
        </svg>
      )}
      {(iconId === '09d' || iconId === '09n') && (
        <svg
          width={width || '24'}
          height={height || '24'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1511_20759)">
            <path
              d="M8 19V21"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 13V15"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 19V21"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 13V15"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 21V23"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 15V17"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 16.58C21.0512 16.1196 21.9121 15.3115 22.4381 14.2915C22.9641 13.2715 23.1231 12.1016 22.8886 10.9782C22.6541 9.85475 22.0402 8.8462 21.15 8.12182C20.2599 7.39745 19.1476 7.00134 18 6.99999H16.74C16.423 5.77251 15.8189 4.63794 14.9773 3.68979C14.1358 2.74164 13.0809 2.00706 11.8998 1.54661C10.7186 1.08615 9.44491 0.913005 8.18368 1.04143C6.92246 1.16986 5.70981 1.59618 4.64569 2.28527C3.58158 2.97436 2.69646 3.90647 2.0633 5.00478C1.43014 6.1031 1.06707 7.33616 1.00401 8.60234C0.94095 9.86852 1.17971 11.1316 1.7006 12.2873C2.2215 13.4431 3.00962 14.4586 4 15.25"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1511_20759">
              <rect
                width={width || '24'}
                height={height || '24'}
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {(iconId === '10d' || iconId === '10n') && (
        <svg
          width={width || '24'}
          height={height || '24'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1511_20754)">
            <path
              d="M16 13V21"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 13V21"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 15V23"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 16.58C21.0512 16.1196 21.9121 15.3115 22.4381 14.2915C22.9641 13.2715 23.1231 12.1016 22.8886 10.9782C22.6541 9.85475 22.0402 8.8462 21.15 8.12182C20.2599 7.39745 19.1476 7.00134 18 6.99999H16.74C16.423 5.77251 15.8189 4.63794 14.9773 3.68979C14.1358 2.74164 13.0809 2.00706 11.8998 1.54661C10.7186 1.08615 9.44491 0.913005 8.18368 1.04143C6.92246 1.16986 5.70981 1.59618 4.64569 2.28527C3.58158 2.97436 2.69646 3.90647 2.0633 5.00478C1.43014 6.1031 1.06707 7.33616 1.00401 8.60234C0.94095 9.86852 1.17971 11.1316 1.7006 12.2873C2.2215 13.4431 3.00962 14.4586 4 15.25"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1511_20754">
              <rect
                width={width || '24'}
                height={height || '24'}
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {(iconId === '11d' || iconId === '11n') && (
        <svg
          width={width || '24'}
          height={height || '24'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1511_20815)">
            <path
              d="M20 16.58C21.0512 16.1196 21.9121 15.3116 22.4381 14.2916C22.9641 13.2715 23.1231 12.1016 22.8886 10.9782C22.6541 9.85478 22.0402 8.84623 21.15 8.12185C20.2599 7.39748 19.1476 7.00137 18 7.00002H16.74C16.423 5.77254 15.8189 4.63797 14.9773 3.68982C14.1358 2.74167 13.0809 2.00709 11.8998 1.54664C10.7186 1.08619 9.44491 0.913035 8.18368 1.04146C6.92246 1.16989 5.70981 1.59622 4.64569 2.2853C3.58158 2.97439 2.69646 3.9065 2.0633 5.00482C1.43014 6.10313 1.06707 7.33619 1.00401 8.60237C0.94095 9.86855 1.17971 11.1316 1.7006 12.2874C2.2215 13.4432 3.00962 14.4586 4 15.25"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.3403 10.2502C12.3782 9.7165 11.6643 9.50427 11.4045 9.97202L7.91269 16.2572C7.72755 16.5904 7.96853 17 8.34977 17H11.463C11.7532 17 11.9824 17.2462 11.9618 17.5356L11.6793 21.4904C11.6403 22.0362 12.3805 22.239 12.6252 21.7496L16.1382 14.7236C16.3044 14.3912 16.0627 14 15.691 14H12.6108C12.3208 14 12.0916 13.754 12.1121 13.4646L12.3403 10.2502Z"
              fill={color || '#FFFFFF'}
            />
          </g>
          <defs>
            <clipPath id="clip0_1511_20815">
              <rect
                width={width || '24'}
                height={height || '24'}
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {(iconId === '13d' || iconId === '13n') && (
        <svg
          width={width || '24'}
          height={height || '24'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1511_20767)">
            <path
              d="M20 17.58C21.0512 17.1196 21.9121 16.3116 22.4381 15.2916C22.9641 14.2715 23.1231 13.1016 22.8886 11.9782C22.6541 10.8548 22.0402 9.84623 21.15 9.12185C20.2599 8.39748 19.1476 8.00137 18 8.00002H16.74C16.423 6.77254 15.8189 5.63797 14.9773 4.68982C14.1358 3.74167 13.0809 3.00709 11.8998 2.54664C10.7186 2.08618 9.44491 1.91304 8.18368 2.04146C6.92246 2.16989 5.70981 2.59622 4.64569 3.2853C3.58158 3.97439 2.69646 4.9065 2.0633 6.00482C1.43014 7.10313 1.06707 8.33619 1.00401 9.60237C0.94095 10.8685 1.17971 12.1316 1.7006 13.2874C2.2215 14.4432 3.00962 15.4586 4 16.25"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 16H8.01"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 20H8.01"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18H12.01"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22H12.01"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 16H16.01"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 20H16.01"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1511_20767">
              <rect
                width={width || '24'}
                height={height || '24'}
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {(iconId === '50d' || iconId === '50n') && (
        <svg
          width={width || '24'}
          height={height || '24'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1511_20856)">
            <path
              d="M5 5H7"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 10H6"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M17 20L19 20"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M5 15L9 15"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 20L13 20"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M10 10L11 10"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M13 15L14 15"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M11 5H21"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M15 10H19"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M18 15H21"
              stroke={color || '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1511_20856">
              <rect
                width={width || '24'}
                height={height || '24'}
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  )
}

export default WeatherIcon

WeatherIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  iconId: PropTypes.oneOf([
    '01d',
    '02d',
    '03d',
    '04d',
    '09d',
    '10d',
    '11d',
    '13d',
    '50d',
  ]),
}
