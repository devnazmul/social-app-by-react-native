import { Ionicons, Octicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, STYLE } from '../../../constants';
import { API_END_POINT, API_TOKEN } from '../../../constants/secret';
import PostCard from "../../components/PostCard";


const Home = ({ setIsLoggedIn }) => {
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState('');
  const [session, setSession] = useState();


  useEffect(() => {
    AsyncStorage.getItem('USER_DATA').then((data) => {
      setSession(JSON.parse(data).jwt)
      axios.get(`${API_END_POINT}/api/posts?populate=*`, {
        headers: {
          'Authorization': `bearer ${API_TOKEN}`
        }
      }).then(response => {
        setPosts(response.data.data);
      })
    })

  }, [])

  return (
    <>
      {session && <SafeAreaView style={STYLE.container}>
        <View style={STYLE.createPost}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }} >
            <Image
              style={{ borderRadius: 30, marginRight: 20 }}
              source={{ uri: 'https://i.ibb.co/Wkqphdn/4e54d6b62705344ac19f499710607774-2.png', width: 30, height: 30 }} />
            <TextInput
              style={{
                backgroundColor: 'transparent',
                borderBottomColor: COLORS.secondaryYellow,
                borderBottomWidth: 1,
                width: '100%'
              }}
              onChangeText={(e) => setPostContent(e)}
              placeholder="Create post"
              placeholderTextColor={COLORS.lightYellow}
            />
            <TouchableOpacity style={{ marginLeft: 20, width: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Ionicons name="send-sharp" size={25} color={`${COLORS.secondaryYellow}`} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: COLORS.lightYellow, borderWidth: 2, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: COLORS.extraDarkGray }}>
              <Octicons style={{ marginRight: 10 }} name="image" size={25} color={`${COLORS.secondaryYellow}`} />
              <Text style={{ color: COLORS.secondaryYellow }}>Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: COLORS.lightYellow, borderWidth: 2, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: COLORS.extraDarkGray }}>
              <Ionicons style={{ marginRight: 10 }} name="md-videocam-outline" size={25} color={`${COLORS.secondaryYellow}`} />
              <Text style={{ color: COLORS.secondaryYellow }
              }>Video</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          {posts && posts.map((post) => <PostCard key={post.id} data={post.attributes} />)}
        </ScrollView>
      </SafeAreaView>
      }
    </>
  );
};

export default Home;
