// import { API_END_POINT, API_TOKEN } from "@env";
import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { API_END_POINT, API_TOKEN } from '../../../constants/secret';
import PostCard from "../../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`${API_END_POINT}/api/posts?populate=*&Authorization`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}` 
      }
    }).then(response => {
      setPosts(response.data.data);
    })
  }, [])

  return (  
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {posts.map((post) => <PostCard key={post.id} data={post.attributes} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
    backgroundColor: colors.primaryDark,
  },
});
