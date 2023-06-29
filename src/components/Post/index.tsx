/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import axios from 'axios';

import {
  AnswerText,
  AnswerTouchable,
  AnswersContainer,
  BackgroundImage,
  BottomContainer,
  BottomWrap,
  ButtonContainer,
  ButtonText,
  Container,
  Description,
  IconWrap,
  InfoContainer,
  PlaylistName,
  PlaylistWrap,
  ProfilePicture,
  ProfileWrap,
  QuestionContainer,
  QuestionText,
  RightContainer,
  UserName,
  Wrapper,
} from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PostType {
  id: number;
  image: string;
  question: string;
  user: {
    avatar: string;
    name: string;
  };
  options: {id: string; answer: string}[];
  description: string;
  playlist: string;
}

const Post: React.FC<{post: PostType}> = ({post}) => {
  const [rightAnswer, setRightAnswer] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const revealAnswer = () => {
    axios
      .get(`https://cross-platform.rp.devfactory.com/reveal?id=${post.id}`)
      .then(res => {
        if (res.data) {
          const {correct_options} = res.data;

          setRightAnswer(correct_options[0].id);
        }
      });
  };

  const calcBgColor = (answerId: string) => {
    if (
      (answerId === rightAnswer || answerId === selectedAnswer) &&
      rightAnswer
    ) {
      if (answerId === rightAnswer) {
        return 'rgba(0, 255, 0, 0.6)';
      }

      return 'rgba(255, 0, 0, 0.6)';
    }

    return 'rgba(255, 255, 255, 0.6)';
  };

  return (
    <Container>
      <BackgroundImage source={{uri: post.image}} resizeMode="cover">
        <QuestionContainer>
          <QuestionText>{post.question}</QuestionText>
        </QuestionContainer>

        <TouchableWithoutFeedback>
          <Wrapper>
            <InfoContainer>
              <RightContainer>
                <ProfileWrap>
                  <ProfilePicture source={{uri: post.user.avatar}} />
                  <IconWrap>
                    <Entypo name="plus" size={20} color="white" />
                  </IconWrap>
                </ProfileWrap>

                <ButtonContainer>
                  <AntDesign name={'heart'} size={35} color={'white'} />
                  <ButtonText>87</ButtonText>
                </ButtonContainer>

                <ButtonContainer>
                  <FontAwesome name={'commenting'} size={35} color="white" />
                  <ButtonText>2</ButtonText>
                </ButtonContainer>

                <ButtonContainer>
                  <Ionicons name="md-bookmark-sharp" size={35} color="white" />
                  <ButtonText>203</ButtonText>
                </ButtonContainer>

                <ButtonContainer>
                  <Fontisto name={'share-a'} size={35} color="white" />
                  <ButtonText>17</ButtonText>
                </ButtonContainer>
              </RightContainer>

              <BottomContainer>
                <BottomWrap>
                  <AnswersContainer>
                    {post.options.map(p => (
                      <AnswerTouchable
                        onPress={() => {
                          setSelectedAnswer(p.id);
                          revealAnswer();
                        }}
                        bgColor={calcBgColor(p.id)}>
                        <AnswerText
                          style={{
                            textShadowColor: '#000',
                            textShadowOffset: {
                              width: 1.5,
                              height: 1.5,
                            },
                            textShadowRadius: 1,
                          }}>
                          {p.answer}
                        </AnswerText>
                      </AnswerTouchable>
                    ))}
                  </AnswersContainer>
                  <View>
                    <UserName>{post.user.name}</UserName>
                    <Description>{post.description}</Description>
                  </View>
                </BottomWrap>
              </BottomContainer>
            </InfoContainer>
            <PlaylistWrap>
              <MaterialIcons name="video-library" size={24} color="white" />
              <PlaylistName>Playlist Unit 5: {post.playlist}</PlaylistName>
            </PlaylistWrap>
          </Wrapper>
        </TouchableWithoutFeedback>
      </BackgroundImage>
    </Container>
  );
};

export default Post;
