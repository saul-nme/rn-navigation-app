import {StyleSheet} from 'react-native';

export const Colors = {
  primary: '#5856D6',
  white: '#FFFFFF',
  gray: '#5e5e5e',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  bigButton: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  bigText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
    top: -4,
    backgroundColor: '#63e0ff',
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  circle1: {
    top: 0,
    left: 0,
  },
  circle2: {
    bottom: -10,
    right: -40,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 101,
  },
  menuContainer: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  buttonContainer: {
    marginVertical: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    fontWeight: '600',
    color: '#5e5e5e',
    marginLeft: 8,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#adadad',
  },
  menuButton: {
    marginLeft: 8,
  },
});
