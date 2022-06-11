import COLORS from "./colors";

const STYLE = {
    container: {
        paddingHorizontal: 20,
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.primaryDark
    },
    secondaryContainer:{
        flexDirection:'column',
        paddingHorizontal: 20,
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.secondaryYellow,
        justifyContent:'center'
    },
    formSubmitButton: {
        marginTop: 20,
        height: 40,
        borderRadius: 30,
        display: 'flex',
        backgroundColor: COLORS.primaryDark,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 12,
    },
    input: {
        fontSize: 20,
        borderRadius: 30,
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
    },
    h3: {
        fontSize: 20,
        color: COLORS.white,
        textAlign: "center",
        fontWeight: "bold",
    },
    h1:{
        color: COLORS.white,
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 30,
    },
    createPost:{
        backgroundColor:COLORS.extraDarkGray,
        height:80,
        width:'100%',
        borderRadius:20,
        marginTop:20,
        marginBottom:40,
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'column'
    }
}
export default STYLE;
