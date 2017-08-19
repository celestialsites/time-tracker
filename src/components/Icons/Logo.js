import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Circle, G, Path } from 'react-native-svg';

import { LIGHT_GRAY } from 'config/colors';

function Logo({ width, height, style, isActive }) {
  const lightBackground = isActive ? '#D3D7DA' : LIGHT_GRAY;
  const darkBackground = isActive ? '#193651' : LIGHT_GRAY;
  const primaryActive = isActive ? '#4FBF9F' : LIGHT_GRAY;
  const secondaryyActive = isActive ? '#2EA2DB' : LIGHT_GRAY;

  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 398.285 398.285">
      <Circle cx="199.196" cy="191.612" r="191.612" fill={lightBackground}/>
      <Path d="M388.35 281.86l-57.728-57.73c7.37-41.568-4.913-86.11-36.848-118.432-32.517-32.517-77.06-44.865-118.756-37.172L117.612 11.12 10.04 118.69l57.73 57.73c-7.37 41.568 4.912 86.11 36.847 118.432 32.194 32.194 76.994 44.412 118.885 36.72l57.34 57.858 107.51-107.57z" fill="#FFF"/>
      <Path d="M320.343 103.24l-18.554 18.554-24.114-24.113 18.554-18.553c2.457-2.457 6.206-2.457 8.663 0l15.45 15.45c2.52 2.457 2.52 6.207 0 8.663z" fill={secondaryyActive}/>
      <G fill={primaryActive}>
        <Path d="M397.05 320.028l-78.258 78.257-41.963-41.963 78.257-78.257zM79.498 2.466L121.46 44.43l-78.257 78.256L1.24 80.723z"/>
      </G>
      <Path d="M169.523 170.602c-16.097 16.097-16.097 42.667 0 59.345 16.097 16.097 42.667 16.097 59.345 0 16.097-16.097 16.097-42.667 0-59.345-16.678-16.68-42.666-16.68-59.345 0z" fill={lightBackground}/>
      <Path d="M187.43 188.51c-6.206 6.205-6.206 16.678 0 22.884 6.206 6.206 16.68 6.206 22.885 0 6.206-6.206 6.206-16.68 0-22.885-6.206-6.142-16.032-6.142-22.885 0z" fill="#FFF"/>
      <G fill={darkBackground}>
        <Path d="M390.808 277.527l-55.66-55.66c6.787-42.668-6.207-87.79-38.918-120.567-33.358-31.547-72.92-45.77-120.566-38.917l-55.66-55.66-8.598 8.727 49.455 49.455c-23.466 6.206-45.122 18.554-62.447 35.88-17.907 17.906-29.673 39.563-35.88 62.447l-50.1-50.1-8.598 8.662 55.66 55.66c-6.787 42.668 6.207 87.79 38.918 120.567 32.13 32.13 72.92 45.124 120.566 38.918l55.66 55.66 8.663-8.662-49.455-49.455c23.467-6.205 45.123-18.553 62.448-35.878 17.907-17.907 29.673-39.564 35.88-62.45l50.1 50.102 8.532-8.727zm-66.134-71.046c-1.228 28.445-12.347 56.89-32.776 79.128l-14.87-14.87-9.243 8.664 14.87 14.87c-22.24 19.78-49.456 31.546-79.128 32.775v-14.222H191.18v14.222c-29.673-1.228-57.47-12.994-79.127-32.776l14.804-14.868-8.663-8.663-15.45 14.868C82.96 263.37 71.195 236.153 69.966 206.48H84.19v-12.346H69.967c1.228-29.673 12.994-57.47 32.776-79.127l14.804 14.87 8.663-8.664-14.804-14.804c22.238-19.783 49.455-31.548 79.127-32.777v14.222h12.347V73.632c29.673 1.228 57.47 12.994 79.127 32.776l-14.87 14.804 8.664 8.663 14.87-14.87c20.428 22.886 31.547 50.684 32.776 79.128h-14.222v12.347h15.45z"/>
        <Path d="M266.557 258.392l-47.58-47.58c3.685-6.788 3.685-14.87 0-21.657l32.13-32.13-8.664-8.662-32.13 32.13c-8.662-4.332-19.78-3.104-26.57 3.684-8.662 8.663-8.662 22.885 0 32.13 4.332 4.33 9.892 6.787 16.098 6.787 3.686 0 7.435-1.228 11.12-3.103l47.58 47.58 8.017-9.178zm-74.796-51.33c-3.684-3.684-3.684-10.536 0-14.22 1.876-1.876 4.332-3.104 7.435-3.104 2.457 0 5.56 1.228 7.434 3.103 3.684 3.686 3.684 10.538 0 14.223-4.33 4.33-10.537 4.33-14.87 0z"/>
      </G>
    </Svg>
  );
}

Logo.defaultProps = {
  width: 35,
  height: 35,
  isActive: false
};

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.number,
  isActive: PropTypes.bool
};

export default Logo;
