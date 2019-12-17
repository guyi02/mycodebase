<View style={estilos.constainer}>
    <ScrollView>
        <View style={estilos.speechArea}>
            {/* Incio conversa */}
            <Text style={estilos.textCurrentData}>12/02/2019</Text>

            <View style={estilos.bubbleSpeech}>
                <View style={estilos.bordaDireita}></View>
                <Text style={{ color: globalStyles.colors.fontColorPrimary }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu hendrerit mag?
                </Text>
            </View>

            <View style={estilos.bubbleSpeech}>
                <View style={estilos.bordaDireita}></View>
                <Text style={{ color: globalStyles.colors.fontColorPrimary }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu hendrerit mag?
                </Text>
            </View>

            <View style={estilos.bubbleSpeech}>
                <View style={estilos.bordaDireita}></View>
                <Text style={{ color: globalStyles.colors.fontColorPrimary }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu hendrerit mag?
                </Text>
            </View>

            <View style={estilos.areaSpeechMentor}>
                <Image
                    style={estilos.imgMentor}
                    source={assets.imagemProfessor}
                />
                <View style={estilos.bubbleSpeechMentor}>
                    <View style={estilos.bordaEsquerda}></View>
                    <Text
                        style={{ color: globalStyles.colors.fontColorPrimary }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu hendrerit mag?
                    </Text>
                </View>
            </View>

            <View style={estilos.areaSpeechMentor}>
                <Image
                    style={estilos.imgMentor}
                    source={assets.imagemProfessor}
                />
                <View style={estilos.bubbleSpeechMentor}>
                    <View style={estilos.bordaEsquerda}></View>
                    <Text
                        style={{ color: globalStyles.colors.fontColorPrimary }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu hendrerit mag?
                    </Text>
                </View>
            </View>
            {/* Fim conversa */}

            {/* Incio conversa */}
            <Text style={estilos.textCurrentData}>13/02/2019</Text>

            <View style={estilos.bubbleSpeech}>
                <View style={estilos.bordaDireita}></View>
                <Text style={{ color: globalStyles.colors.fontColorPrimary }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu hendrerit mag?
                </Text>
            </View>

            <View style={estilos.bubbleSpeech}>
                <View style={estilos.bordaDireita}></View>
                <Text style={{ color: globalStyles.colors.fontColorPrimary }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu hendrerit mag?
                </Text>
            </View>

            <View style={estilos.areaSpeechMentor}>
                <Image
                    style={estilos.imgMentor}
                    source={assets.imagemProfessor}
                />
                <View style={estilos.bubbleSpeechMentor}>
                    <View style={estilos.bordaEsquerda}></View>
                    <Text
                        style={{ color: globalStyles.colors.fontColorPrimary }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu hendrerit mag?
                    </Text>
                </View>
            </View>

            <View style={estilos.bubbleSpeech}>
                <View style={estilos.bordaDireita}></View>
                <Text style={{ color: globalStyles.colors.fontColorPrimary }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu hendrerit mag?
                </Text>
            </View>

            <View style={estilos.areaSpeechMentor}>
                <Image
                    style={estilos.imgMentor}
                    source={assets.imagemProfessor}
                />
                <View style={estilos.bubbleSpeechMentor}>
                    <View style={estilos.bordaEsquerda}></View>
                    <Text
                        style={{ color: globalStyles.colors.fontColorPrimary }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu hendrerit mag?
                    </Text>
                </View>
            </View>
            {/* Fim conversa */}
        </View>
    </ScrollView>

    <View style={estilos.userInput}>
        <TextInput
            style={estilos.inputTextBottom}
            placeholder="Digitar..."
            placeholderTextColor={globalStyles.colors.fontColorPrimary}
        />
        <TouchableOpacity
            activeOpacity={0.5}
            style={{ marginHorizontal: 10 }}
            onPress={() => alert("teste")}
        >
            <Text style={estilos.textSubmit}>ENVIAR</Text>
        </TouchableOpacity>
    </View>
</View>;

const estilos = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: globalStyles.colors.backgroundSecondary,
    },

    speechArea: {
        flex: 1,
        paddingHorizontal: 20,
    },
    textCurrentData: {
        fontFamily: globalStyles.fonts.textFont,
        fontSize: 13,
        color: "#808080",
        textAlign: "center",
        marginVertical: 20,
    },
    bubbleSpeech: {
        width: 290,
        backgroundColor: globalStyles.colors.colorSecondary,
        borderRadius: 17,
        padding: 20,
        alignSelf: "flex-end",
        marginBottom: 20,
    },
    bordaDireita: {
        position: "absolute",
        top: 0,
        right: -15,
        borderLeftColor: globalStyles.colors.colorSecondary,
        borderTopColor: globalStyles.colors.colorSecondary,
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
        borderRightWidth: 35,
        borderTopWidth: 35,
    },
    areaSpeechMentor: {
        flexDirection: "row",
    },
    imgMentor: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginRight: 10,
    },
    bubbleSpeechMentor: {
        width: 240,
        backgroundColor: globalStyles.colors.colorPrimary,
        borderRadius: 17,
        padding: 20,
        marginBottom: 20,
    },
    bordaEsquerda: {
        position: "absolute",
        top: 0,
        left: -15,
        borderLeftColor: globalStyles.colors.colorPrimary,
        borderTopColor: globalStyles.colors.colorPrimary,
        borderLeftColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftWidth: 35,
        borderTopWidth: 35,
    },
    userInput: {
        backgroundColor: globalStyles.colors.backgroundPrimary,
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
    },
    inputTextBottom: {
        flex: 1,
        height: 65,
        backgroundColor: globalStyles.colors.backgroundPrimary,
        fontFamily: globalStyles.fonts.textFont,
        color: globalStyles.colors.fontColorPrimary,
        fontSize: 15,
    },
    textSubmit: {
        fontFamily: globalStyles.fonts.textFont,
        fontWeight: "bold",
        fontSize: 15,
        color: "#989898",
    },
});
