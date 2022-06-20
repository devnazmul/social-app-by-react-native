import { API_END_POINT } from '@env';
import { Ionicons, Octicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { imgbbUploader } from "imgbb-uploader";
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, STYLE } from '../../../constants';
import Loading from '../../components/Loading';
import PostCard from '../../components/PostCard';

const Home = ({ setIsLoggedIn }) => {
  const [post, setPost] = useState([]);
  const [logedInUser, setLogedInUser] = useState()
  useEffect(() => {
    AsyncStorage.getItem('USER_DATA').then((data) => {
      const dataObj = JSON.parse(data);
      !dataObj?.token ? setIsLoggedIn(false) : setIsLoggedIn(true)
      axios.get(`${API_END_POINT}/posts/`, {
        headers: {
          'Authorization': dataObj.token
        }
      }).then(response => {
        setLogedInUser(dataObj)
        setPost(response.data.reverse());
      })
    }).catch(error => {
      alert(error)
    });
  }, [])

  const createPost = () => {
    imgbbUploader("your-imgbb-api-key-string", "path/to/your/image.png")
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
  }
  return (
    <SafeAreaView style={STYLE.container}>
      {
        !logedInUser ? <Loading /> :
          <View style={STYLE.createPost}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20
            }}>
              <Image
                style={{
                  borderRadius: 30,
                  marginRight: 20
                }}
                source={{ uri: logedInUser.user_profile_pic_url, width: 30, height: 30 }}
              />
              <TextInput
                style={{
                  backgroundColor: 'transparent',
                  borderBottomColor: COLORS.secondaryYellow,
                  borderBottomWidth: 1,
                  width: '100%',
                  outline: 'none',
                  color: COLORS.secondaryYellow,
                }}
                onChangeText={(e) => setPostContent(e)}
                placeholder="Create post"
                placeholderTextColor={COLORS.lightYellow} />
              <TouchableOpacity style={{
                marginLeft: 20,
                width: 25,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Ionicons name="send-sharp" size={25} color={`${COLORS.secondaryYellow}`} />
              </TouchableOpacity>
            </View>
            <View style={{
              flexDirection: 'row', justifyContent: 'space-around'
            }}>
              <TouchableOpacity style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: COLORS.lightYellow,
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: COLORS.extraDarkGray
              }}>
                <Octicons style={{
                  marginRight: 10
                }} name="image" size={25} color={`${COLORS.secondaryYellow}`} />

                <Text style={{
                  color: COLORS.secondaryYellow
                }}>Image</Text>

              </TouchableOpacity>
              <TouchableOpacity style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: COLORS.lightYellow,
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: COLORS.extraDarkGray
              }}>
                <Ionicons style={{
                  marginRight: 10
                }} name="md-videocam-outline" size={25} color={`${COLORS.secondaryYellow}`} />
                <Text style={{
                  color: COLORS.secondaryYellow
                }
                }>Video</Text>
              </TouchableOpacity>
            </View>
          </View>
      }
      <ScrollView>
        {
          post && post.map((post) => <PostCard key={post._id} data={post} />)
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
