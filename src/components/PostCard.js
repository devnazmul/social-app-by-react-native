import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';

export default function PostCard() {
  const [liked, setLiked] = useState(false)
  
  const postContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ipsa illo quia, maxime aliquid nesciunt hic dolor non facilis qui at sed, explicabo provident esse animi odit placeat eius eos?'
  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
      activeOpacity={0.7}
        style={{
          position: 'relative'
        }}
        onLongPress={() => {
          setLiked(liked?false:true)
        }}
      >
        {liked && (
          <View style={{
            position: 'absolute',
            display: 'flex',
            height:'100%',
            width:'100%',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex:100,
          }}>
             <FontAwesome
          style={{
            fontSize: 200,
            color: colors.secondaryYellow,
            opacity:0.5
          }}
          name='heart'
        />
          </View>
       
        )}

        <Image
          style={styles.image}
          source={{ uri: 'https://i.ibb.co/XZLQcGN/4e54d6b62705344ac19f499710607774.png' }}
        />
      </TouchableOpacity>


      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => alert('profile')}
          style={{
            paddingTop: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 10
          }}
        >
          <Image
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: colors.secondaryYellow
            }}
            source={{ uri: 'https://i.ibb.co/XZLQcGN/4e54d6b62705344ac19f499710607774.png', width: 35, height: 35 }}
          />

          <View
            style={{ marginLeft: 10 }}
          >
            <Text
              style={{ color: colors.white, fontWeight: 'bold', fontSize: 17 }}
            >Md Raisul Islam</Text>
            <Text
              style={{ color: colors.lightGray, fontSize: 15 }}
            >29 min ago</Text>
          </View>
        </TouchableOpacity>

        <Text
          style={{
            color: 'white',
            marginBottom: 10
          }}
        >

          {postContent.slice(0, 90) + ' ...'}

          <Text
            onPress={() => alert('full content')}
            style={{
              color: colors.secondaryYellow,
              fontWeight: 'bold'
            }}
          > See more</Text>

        </Text>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: colors.darkGray,
            paddingTop: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5
          }}
        >
          <TouchableOpacity
            onPress={() => alert('liked')}
            style={styles.interactionBtn}
          >

            {/* ================ OUTLINE ICON ============ */}

            <FontAwesome
              style={{
                fontSize: 25,
                color: colors.secondaryYellow
              }}
              name='heart-o'
            />

            {/* ================ FILLED ICON ============ */}

            {/* <FontAwesome style={{
              fontSize: 25,
              color: colors.secondaryYellow
            }} name='heart' /> */}

            <Text
              style={styles.counterStyle}
            >100k likes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => alert('comments')}
            style={styles.interactionBtn}
          >
            <FontAwesome
              style={{
                fontSize: 25,
                color: colors.secondaryYellow
              }}
              name='comment-o'
            />

            <Text
              style={styles.counterStyle}
            >340 comments</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => alert('share')}
            style={styles.interactionBtn}
          >
            <FontAwesome
              style={{
                fontSize: 25,
                color: colors.secondaryYellow
              }}
              name='share'
            />
            <Text
              style={styles.counterStyle}
            >share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryDark,
    paddingBottom: 10,
    window: '60%',
    marginBottom: 20,
    borderRadius: 20
  },
  image: {
    borderRadius: 20,
    resizeMode: 'cover',
    flex: 1,
    width: '100%',
    height: 400,
  },

  interactionBtn: {
    display: 'flex',
    alignItems: 'center'
  },
  counterStyle: {
    color: colors.lightGray
  }

})