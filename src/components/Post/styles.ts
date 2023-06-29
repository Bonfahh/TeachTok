import {Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface AnswerProps {
  bgColor: string;
}

export const Container = styled.View`
  width: 100%;
  height: ${Dimensions.get('window').height - 80};
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
`;

export const QuestionContainer = styled.View`
  position: absolute;
  top: 20%;
  left: 10%;
  width: 60%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

export const QuestionText = styled.Text`
  color: white;
  line-height: 33px;
  padding: 5px;
  font-weight: bold;
  font-size: 22px;
`;

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const InfoContainer = styled.View`
  flex: 1;
  align-self: flex-end;
  flex-direction: row-reverse;
`;

export const RightContainer = styled.View`
  align-self: flex-end;
  justify-content: space-between;
  padding: 5px;
`;

export const ProfileWrap = styled.View`
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
`;

export const ProfilePicture = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 2px;
  border-color: #fff;
`;

export const IconWrap = styled.View`
  background-color: lightgreen;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: -12.5px;
  border-radius: 12.5px;
  height: 25px;
  width: 25px;
`;

export const ButtonContainer = styled(TouchableOpacity)`
  align-items: center;
  margin-vertical: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
`;

export const BottomContainer = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 85%;
`;

export const BottomWrap = styled.View`
  width: 95%;
  height: 45%;
  justify-content: space-between;
`;

export const AnswersContainer = styled.View`
  justify-content: space-evenly;
  width: 100%;
`;

export const AnswerTouchable = styled(TouchableOpacity)<AnswerProps>`
  background-color: ${props => props.bgColor};
  padding-horizontal: 10px;
  padding-vertical: 15px;
  border-radius: 7.5px;
  width: 100%;
  margin-bottom: 10px;
`;

export const AnswerText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
`;

export const PlaylistWrap = styled.View`
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  flex-direction: row;
  align-items: center;
`;

export const PlaylistName = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 5px;
`;
