import { StyleSheet } from 'react-native';

import { WHITE, VALLEY_GREEN, MOUNTAIN_MEADOW, SILVER, DOVE_GRAY } from 'config/colors';

const basicUnit = {
  borderRadius: 280,
  width: 280,
  height: 280,
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  margin: 39,
  padding: 20,
  borderWidth: 8
};
const activeUnit = {
  borderColor: MOUNTAIN_MEADOW,
  backgroundColor: WHITE
};
const inActiveUnit = {
  borderColor: SILVER,
  backgroundColor: WHITE
};

export default StyleSheet.create({
  unitActive: {
    ...basicUnit,
    ...activeUnit
  },
  unitInActive: {
    ...basicUnit,
    ...inActiveUnit
  },
  textBox: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200
  },
  name: {
    color: '#333',
    fontWeight: '600',
    fontFamily: 'Dosis',
    fontSize: 30,
    lineHeight: 30,
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  details: {
    color: DOVE_GRAY,
    fontWeight: '300',
    fontFamily: 'Dosis',
    fontSize: 20,
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  emptyBox: {
    alignItems: 'center',
    transform: [{ translate: [0, -15] }]
  },
  actionText: {
    color: DOVE_GRAY,
    fontWeight: '600',
    fontFamily: 'Dosis',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10
  },
  holidayText: {
    color: DOVE_GRAY,
    fontWeight: '600',
    fontFamily: 'Dosis',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10
  },
  iconBox: {
    width: 90,
    height: 70,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translate: [83, 38] }]
  },
  unitDate: {
    color: SILVER,
    fontWeight: '600',
    fontFamily: 'Dosis',
    fontSize: 16,
    textAlign: 'center'
  }
});
