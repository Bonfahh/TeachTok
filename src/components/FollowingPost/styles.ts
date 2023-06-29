import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface OptionProps {
  bgColor: string;
}

export const FlashcardWrap = styled.ScrollView`
  width: 100%;
`;

export const FrontText = styled.Text`
  align-self: flex-start;
  font-size: 22;
  color: white;
`;

export const Bar = styled.View`
  width: 100%;
  height: 2px;
  background-color: lightgray;
  opacity: 0.6;
  margin-vertical: 10%;
`;

export const Answer = styled.Text`
  color: #00917c;
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: 2.5%;
`;

export const BackText = styled.Text`
  align-self: center;
  font-size: 22px;
  color: lightgray;
  margin-bottom: 10%;
`;

export const KnowledgeQuestion = styled.Text`
  align-self: flex-start;
  font-size: 22;
  color: lightgray;
  font-weight: 200;
  margin-bottom: 10px;
`;

export const OptionsWrap = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`;

export const OptionView = styled.View<OptionProps>`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  justify-content: center;
  align-items: center;
`;

export const OptionTouchable = styled(TouchableOpacity)<OptionProps>`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  justify-content: center;
  align-items: center;
`;

export const OptionText = styled.Text`
  color: white;
  font-weight: bold;
`;
