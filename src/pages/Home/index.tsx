import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import axios from 'axios';

import Post from '../../components/Post';
import Header from '../../components/Header';
import FollowingPost from '../../components/FollowingPost';

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

interface FollowingPostType {
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

const Home = () => {
  const [posts, setPosts] = useState<PostType[] | []>([]);
  const [tab, setTab] = useState<string>('forYou');
  const [followingPosts, setFollowingPosts] = useState<
    FollowingPostType[] | []
  >([]);

  const loadNextPost = () => {
    axios.get('https://cross-platform.rp.devfactory.com/for_you').then(res => {
      if (res.data) {
        setPosts(prev => [...prev, res.data]);
      }
    });
  };

  const loadNextFollowingPost = () => {
    axios
      .get('https://cross-platform.rp.devfactory.com/following')
      .then(res => {
        if (res.data) {
          setFollowingPosts(prev => [...prev, res.data]);
        }
      });
  };

  useEffect(() => {
    loadNextPost();
  }, []);

  useEffect(() => {
    loadNextFollowingPost();
  }, []);

  return (
    <View>
      <Header tab={tab} setTab={setTab} />
      {tab === 'forYou' ? (
        <FlatList
          data={posts}
          renderItem={({item}) => <Post key={item.id} post={item} />}
          showsVerticalScrollIndicator={false}
          snapToInterval={Dimensions.get('window').height - 80}
          onEndReachedThreshold={0.01}
          onEndReached={loadNextPost}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
        />
      ) : (
        <FlatList
          data={followingPosts}
          renderItem={({item}) => <FollowingPost key={item.id} post={item} />}
          showsVerticalScrollIndicator={false}
          snapToInterval={Dimensions.get('window').height - 80}
          onEndReachedThreshold={0.01}
          onEndReached={loadNextFollowingPost}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
        />
      )}
    </View>
  );
};

export default Home;
