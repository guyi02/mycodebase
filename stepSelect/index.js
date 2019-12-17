import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Modal,
    ActivityIndicator,
    Alert,
    Image,
    TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import * as globalStyles from "./../../../components/GlobalStyles";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Onboarding from "react-native-onboarding-swiper";

export default class OnboardingPage extends Component {
    static navigationOptions = navigation => {
        return {
            title: "Toolzz Mentor",
            headerStyle: {
                backgroundColor: globalStyles.colors.backgroundSecondary,
                elevation: 0,
            },
            headerTintColor: globalStyles.colors.fontColorPrimary,
            headerTitleStyle: {
                fontFamily: globalStyles.fonts.headersFont,
                fontSize: hp(2.5),
                color: globalStyles.colors.fontColorPrimary,
            },
        };
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {}

    done = () => {
        return (
            <TouchableOpacity
                style={{ padding: 10 }}
                onPress={async () => {
                    this.props.navigation.navigate("Autenticacao");
                }}
            >
                <Text style={{ color: "#fff", fontSize: 16 }}>Concluir</Text>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Onboarding
                    containerStyles={{ padding: 25 }}
                    imageContainerStyles={{}}
                    nextLabel={"Próximo"}
                    skipLabel={"Pular"}
                    showSkip={false}
                    // onDone={ () => this.props.navigation.navigate('Autenticacao') }
                    showDone={true}
                    DoneButtonComponent={this.done}
                    titleStyles={{ fontWeight: "bold" }}
                    pages={[
                        {
                            backgroundColor:
                                globalStyles.colors.backgroundSecondary,
                            image: (
                                <View
                                    style={{
                                        width: wp(70),
                                        height: hp(40),
                                        overflow: "visible",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        resizeMode="contain"
                                        style={{ width: "100%" }}
                                        source={require("./../../../assets/images/bem-vindo.png")}
                                    />
                                </View>
                            ),
                            title: "Bem-vindo",
                            subtitle: `Você foi convidado para participar do pré-registro do Toolzz Mentor.`,
                        },
                        {
                            backgroundColor:
                                globalStyles.colors.backgroundSecondary,
                            image: (
                                <View
                                    style={{
                                        width: wp(70),
                                        height: hp(40),
                                        overflow: "visible",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        resizeMode="contain"
                                        style={{ width: "100%" }}
                                        source={require("./../../../assets/images/para-mentores.png")}
                                    />
                                </View>
                            ),
                            title: "Para mentores e mentorados",
                            subtitle: `Faça parte da rede de conhecimento que tem como objetivo impactar jovens de todo o mundo.`,
                        },
                        {
                            backgroundColor:
                                globalStyles.colors.backgroundSecondary,
                            image: (
                                <View
                                    style={{
                                        width: wp(70),
                                        height: hp(40),
                                        overflow: "visible",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        resizeMode="contain"
                                        style={{ width: "100%" }}
                                        source={require("./../../../assets/images/inscreva-se.png")}
                                    />
                                </View>
                            ),
                            title: "Inscreva-se",
                            subtitle: `O cadastro é rápido e vamos entrar em contato apenas quando estiver tudo pronto para você.`,
                        },
                    ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: globalStyles.colors.backgroundSecondary,
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
});
