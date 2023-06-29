import {hasNotch} from 'react-native-device-info';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface TabTextProps {
  selected: boolean;
}

export const Container = styled.View`
  position: absolute;
  align-items: center;
  justify-content: space-between;
  top: ${hasNotch() ? '50px' : '20px'};
  z-index: 999;
  align-self: center;
  width: 90%;
  flex-direction: row;
`;

export const TimeWrap = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TimeText = styled.Text`
  color: lightgray;
  font-size: 16px;
`;

export const TabsWrap = styled.View`
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
`;

export const TabTouchable = styled(TouchableOpacity)`
  align-items: center;
`;

export const TabText = styled.Text<TabTextProps>`
  color: ${props => (props?.selected ? 'white' : 'lightgray')};
  font-size: 16px;
`;

export const SelectedBar = styled.View`
  height: 5px;
  width: 50%;
  background-color: white;
  margin-top: 5px;
`;
