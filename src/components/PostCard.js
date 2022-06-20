import { API_END_POINT } from "@env";
import axios from "axios";
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import Loading from "./Loading";

export default function PostCard({ data }) {
  const [user, setUser] = useState();
  const [revealContent, setRevealContent] = useState(false)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    axios.get(`${API_END_POINT}/users/single`,{
      user_id:'1'
    }).then(response => {
      setUser(response.data.data);
    })
  }, [])

  return (
    <>
      {
        user ?
        // ============================ POST CARD START =========================
        <View style={styles.container} >
          {/*========================== FLOATTING LOVE REACT START ============== */}
          <TouchableOpacity activeOpacity={0.7} style={{ position: 'relative' }} onLongPress={() => setLiked(liked ? false : true)} >

            {liked && (
              <View style={styles.floattingLoveContainer} >
                <FontAwesome style={styles.floattingLove} name='heart' />
              </View>
            )}
            {
              <Image key={''} style={styles.image} source={{ uri: `${data.image}` }} />
            }
          </TouchableOpacity>
          {/*========================== FLOATTING LOVE REACT END ================ */}
          {/*========================== POST CARD BOTTOM PORTION START ========== */}
          <View style={styles.cardBottomPorsion} >
            {/*======================== POST OWNER INFO START =================== */}
            <TouchableOpacity onPress={() => alert('profile')} style={styles.postOwnerContainer} >
              <Image style={styles.profileImage} source={{ uri: `${user.profilePic.url}`, width: 40, height: 40 }} />

              <View style={{ marginLeft: 10 }} >
                <Text style={styles.usernameStyle} >{user.username}</Text>
                <Text style={styles.postTimeStamp} >{moment(data.updatedAt).fromNow()}</Text>
              </View>
            </TouchableOpacity>
            {/*======================== POST OWNER INFO END ================== */}

            {/*======================== POST CONTENT START =================== */}
            <Text style={styles.contentContainer}>
              {
                revealContent ? (
                  <>
                    {data.content}{"\n"}
                    {<Text onPress={() => setRevealContent(revealContent ? false : true)} style={styles.seeMoreButton} > See less</Text>}
                  </>
                ) : (
                  <>
                    {data.content.length > 90 ? data.content.slice(0, 90) + ' ...' : data.content}
                    {data.content.length > 90 && <Text onPress={() => { setRevealContent(revealContent ? false : true) }} style={styles.seeMoreButton} > See more</Text>}
                  </>
                )
              }
            </Text>
            {/*======================== POST CONTENT END ====================== */}

            {/*======================== POST ACTIONS START ==================== */}
            <View style={styles.postActions} >
              <TouchableOpacity onPress={() => alert('liked')} style={styles.interactionBtn} >
                <FontAwesome style={styles.icon} name='heart-o' />
                {/* <FontAwesome style={styles.icon} name='heart' /> */}
                <Text style={styles.counterStyle} >{data.likes.length} likes</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => alert('comments')} style={styles.interactionBtn} >
                <FontAwesome style={styles.icon} name='comment-o' />
                <Text style={styles.counterStyle}>{data.comments.length} comments</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => alert('share')} style={styles.interactionBtn} >
                <FontAwesome style={styles.icon} name='share' />
                <Text style={styles.counterStyle} >share</Text>
              </TouchableOpacity>
            </View>
            {/*====================== POST ACTIONS END ========================== */}
          </View>
          {/*======================== POST CARD BOTTOM PORTION END ============== */}
        </View>
        :
        <Loading />
        // ============================ POST CARD END =============================
      }
    </>

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
  floattingLoveContainer: {
    position: 'absolute',
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  floattingLove: {
    fontSize: 200,
    color: colors.secondaryYellow,
    opacity: 0.5
  },
  cardBottomPorsion: {
    paddingHorizontal: 20,
  },
  postOwnerContainer: {
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10
  },
  profileImage: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: colors.secondaryYellow
  },
  usernameStyle: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 17
  },
  postTimeStamp: {
    color: colors.lightGray,
    fontSize: 15
  },
  seeMoreButton: {
    color: colors.secondaryYellow,
    fontWeight: 'bold'
  },
  contentContainer: {
    color: 'white',
    marginBottom: 10
  },
  interactionBtn: {
    display: 'flex',
    alignItems: 'center'
  },
  counterStyle: {
    fontWeight: 'bold',
    color: colors.lightGray
  },
  postActions: {
    borderTopWidth: 1,
    borderTopColor: colors.darkGray,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  icon: {
    fontSize: 25,
    color: colors.secondaryYellow
  }
})