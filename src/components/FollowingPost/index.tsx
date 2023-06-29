/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';

import {
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
  RightContainer,
  UserName,
  Wrapper,
} from '../Post/styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  Answer,
  BackText,
  Bar,
  FlashcardWrap,
  FrontText,
  KnowledgeQuestion,
  OptionText,
  OptionTouchable,
  OptionView,
  OptionsWrap,
} from './styles';

interface PostType {
  id: number;
  flashcard_front: string;
  flashcard_back: string;
  user: {
    avatar: string;
    name: string;
  };
  description: string;
  playlist: string;
}

const options = [
  {
    id: 1,
    color: '#ff7518',
  },
  {id: 2, color: '#ffb066'},
  {id: 3, color: '#ffe505'},
  {id: 4, color: '#035956'},
  {id: 5, color: '#00917C'},
];

const FollowingPost: React.FC<{post: PostType}> = ({post}) => {
  const [flipped, setFlipped] = useState<boolean>(false);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Container>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{width: '100%', height: Dimensions.get('window').height - 80}}>
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

              <ButtonContainer onPress={() => setFlipped(!flipped)}>
                <View
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 17.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#00917C',
                  }}>
                  <Entypo name="cycle" size={25} color="white" />
                </View>
                <ButtonText>Flip</ButtonText>
              </ButtonContainer>
            </RightContainer>

            <BottomContainer style={{flex: 1}}>
              <BottomWrap style={{height: flipped ? '90%' : '45%'}}>
                <FlashcardWrap
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}>
                  <FrontText>{post.flashcard_front}</FrontText>
                  {flipped && (
                    <>
                      <Bar />
                      <Answer>Answer</Answer>
                      <BackText>{post.flashcard_back}</BackText>
                      <KnowledgeQuestion>
                        How well did you know this?
                      </KnowledgeQuestion>
                      <OptionsWrap>
                        {selected ? (
                          <OptionView
                            bgColor={
                              options.find(o => o.id === selected)?.color ||
                              '#fff'
                            }>
                            <OptionText>{selected}</OptionText>
                          </OptionView>
                        ) : (
                          <>
                            {options.map(o => (
                              <OptionTouchable
                                key={o.id}
                                onPress={() => setSelected(o.id)}
                                bgColor={o.color}>
                                <OptionText>{o.id}</OptionText>
                              </OptionTouchable>
                            ))}
                          </>
                        )}
                      </OptionsWrap>
                    </>
                  )}
                </FlashcardWrap>
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
      </LinearGradient>
    </Container>
  );
};

export default FollowingPost;
