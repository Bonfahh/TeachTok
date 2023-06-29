import React, {useCallback, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Container,
  SelectedBar,
  TabText,
  TabTouchable,
  TabsWrap,
  TimeText,
  TimeWrap,
} from './styles';
import {useFocusEffect} from '@react-navigation/native';

interface HeaderType {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderType> = ({tab, setTab}) => {
  const [timeSpent, setTimeSpent] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const interval = setInterval(() => {
        setTimeSpent(prev => (prev += 1));
      }, 1000);

      return () => clearInterval(interval);
    }, []),
  );

  return (
    <Container>
      <TimeWrap>
        <Ionicons name="stopwatch" size={25} color="lightgray" />
        <TimeText>{Math.round(timeSpent / 60)}m</TimeText>
      </TimeWrap>
      <TabsWrap>
        <TabTouchable onPress={() => setTab('following')}>
          <TabText selected={tab === 'following'}>Following</TabText>
          {tab === 'following' && <SelectedBar />}
        </TabTouchable>
        <TabTouchable onPress={() => setTab('forYou')}>
          <TabText selected={tab === 'forYou'}>For You</TabText>
          {tab === 'forYou' && <SelectedBar />}
        </TabTouchable>
      </TabsWrap>
      <Ionicons name="search" size={25} color="lightgray" />
    </Container>
  );
};

export default Header;
