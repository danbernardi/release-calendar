export const getRegion = (regionCode) => ({
  1: 'Europe (EU)',
  2: 'North America (NA)',
  3: 'Australia (AU)',
  4: 'New Zealand (NZ)',
  5: 'Japan (JP)',
  6: 'China (CH)',
  7: 'Asia (AS)',
  8: 'Worldwide'
}[regionCode]);

export const getPlatform = (platformSlug) => ({
  'win': 'PC',
  'xboxone': 'XBONE',
  'ps4--1': 'PS4',
  'mac': 'Mac',
  'nintendo-switch': 'Switch',
  'psvita': 'Vita',
  '3ds': '3DS',
  'oculus-vr': 'Rift',
  'playstation-vr': 'PSVR',
  'default': 'Other'
}[platformSlug || 'default']);
